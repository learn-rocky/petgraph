DOCCRATES = petgraph fixedbitset

# deps to delete the generated docs
RMDOCS =

FEATURES = unstable

VERSIONS = $(patsubst %,target/VERS/%,$(DOCCRATES))

docs: mkdocs mksvgs subst $(RMDOCS)

# https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html
$(VERSIONS): Cargo.toml
	mkdir -p $(@D)
	cargo pkgid $(@F) | sed -e "s/.*#\(\|.*:\)//" > "$@"

$(DOCCRATES): %: target/VERS/%
	# Put in the crate version into the docs
	find ./doc/$@ -name "*.html" -exec sed -i -e "s/<title>\(.*\) - Rust/<title>$@ $(shell cat $<) - \1 - Rust/g" {} \;

subst: $(DOCCRATES)

mkdocs: Cargo.toml
	cargo doc --features=$(FEATURES)
	rm -rf ./doc
	cp -r ./target/doc ./doc
	- cat ./custom.css >> doc/main.css

$(RMDOCS): mkdocs
	rm -r ./doc/$@
	sed -i "/searchIndex\['$@'\]/d" doc/search-index.js

mksvgs: mkdocs graph-example.dot
	dot -Tsvg < ./graph-example.dot > graph-example.svg
	mv graph-example.svg ./doc/petgraph/graph/


.PHONY: docs mkdocs mksvgs subst $(DOCCRATES) $(RMDOCS)


# enable makefile to accept argument after command
#https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line

args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`
%:
	@:
status:
	git status
commit:
	git commit -am "$(call args, Automated commit message without details, Please read the code difference)"  && git push
pull:
	git pull
