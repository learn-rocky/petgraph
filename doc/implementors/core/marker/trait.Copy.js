(function() {var implementors = {};
implementors["petgraph"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/visit/struct.Time.html\" title=\"struct petgraph::visit::Time\">Time</a>","synthetic":false,"types":["petgraph::visit::dfsvisit::Time"]},{"text":"impl&lt;N:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"petgraph/visit/enum.DfsEvent.html\" title=\"enum petgraph::visit::DfsEvent\">DfsEvent</a>&lt;N&gt;","synthetic":false,"types":["petgraph::visit::dfsvisit::DfsEvent"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"petgraph/visit/enum.Control.html\" title=\"enum petgraph::visit::Control\">Control</a>&lt;B&gt;","synthetic":false,"types":["petgraph::visit::dfsvisit::Control"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/visit/struct.NodeFiltered.html\" title=\"struct petgraph::visit::NodeFiltered\">NodeFiltered</a>&lt;G, F&gt;","synthetic":false,"types":["petgraph::visit::filter::NodeFiltered"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/visit/struct.EdgeFiltered.html\" title=\"struct petgraph::visit::EdgeFiltered\">EdgeFiltered</a>&lt;G, F&gt;","synthetic":false,"types":["petgraph::visit::filter::EdgeFiltered"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/visit/struct.Reversed.html\" title=\"struct petgraph::visit::Reversed\">Reversed</a>&lt;G&gt;","synthetic":false,"types":["petgraph::visit::reversed::Reversed"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/visit/struct.ReversedEdgeReference.html\" title=\"struct petgraph::visit::ReversedEdgeReference\">ReversedEdgeReference</a>&lt;R&gt;","synthetic":false,"types":["petgraph::visit::reversed::ReversedEdgeReference"]},{"text":"impl&lt;Ix:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/adj/struct.EdgeIndex.html\" title=\"struct petgraph::adj::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ix: <a class=\"trait\" href=\"petgraph/matrix_graph/trait.IndexType.html\" title=\"trait petgraph::matrix_graph::IndexType\">IndexType</a>,&nbsp;</span>","synthetic":false,"types":["petgraph::adj::EdgeIndex"]},{"text":"impl&lt;'a, E, Ix:&nbsp;<a class=\"trait\" href=\"petgraph/matrix_graph/trait.IndexType.html\" title=\"trait petgraph::matrix_graph::IndexType\">IndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/adj/struct.EdgeReference.html\" title=\"struct petgraph::adj::EdgeReference\">EdgeReference</a>&lt;'a, E, Ix&gt;","synthetic":false,"types":["petgraph::adj::EdgeReference"]},{"text":"impl&lt;'a, E, Ty, Ix:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/csr/struct.EdgeReference.html\" title=\"struct petgraph::csr::EdgeReference\">EdgeReference</a>&lt;'a, E, Ty, Ix&gt;","synthetic":false,"types":["petgraph::csr::EdgeReference"]},{"text":"impl&lt;Ix:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/graph/struct.NodeIndex.html\" title=\"struct petgraph::graph::NodeIndex\">NodeIndex</a>&lt;Ix&gt;","synthetic":false,"types":["petgraph::graph_impl::NodeIndex"]},{"text":"impl&lt;Ix:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/graph/struct.EdgeIndex.html\" title=\"struct petgraph::graph::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;","synthetic":false,"types":["petgraph::graph_impl::EdgeIndex"]},{"text":"impl&lt;'a, E, Ix:&nbsp;<a class=\"trait\" href=\"petgraph/matrix_graph/trait.IndexType.html\" title=\"trait petgraph::matrix_graph::IndexType\">IndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/graph/struct.EdgeReference.html\" title=\"struct petgraph::graph::EdgeReference\">EdgeReference</a>&lt;'a, E, Ix&gt;","synthetic":false,"types":["petgraph::graph_impl::EdgeReference"]},{"text":"impl&lt;'a, E, Ix:&nbsp;<a class=\"trait\" href=\"petgraph/matrix_graph/trait.IndexType.html\" title=\"trait petgraph::matrix_graph::IndexType\">IndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/stable_graph/struct.EdgeReference.html\" title=\"struct petgraph::stable_graph::EdgeReference\">EdgeReference</a>&lt;'a, E, Ix&gt;","synthetic":false,"types":["petgraph::graph_impl::stable_graph::EdgeReference"]},{"text":"impl&lt;'b, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"petgraph/graphmap/struct.Ptr.html\" title=\"struct petgraph::graphmap::Ptr\">Ptr</a>&lt;'b, T&gt;","synthetic":false,"types":["petgraph::graphmap::Ptr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"petgraph/enum.Direction.html\" title=\"enum petgraph::Direction\">Direction</a>","synthetic":false,"types":["petgraph::Direction"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"petgraph/enum.Directed.html\" title=\"enum petgraph::Directed\">Directed</a>","synthetic":false,"types":["petgraph::Directed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"petgraph/enum.Undirected.html\" title=\"enum petgraph::Undirected\">Undirected</a>","synthetic":false,"types":["petgraph::Undirected"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()