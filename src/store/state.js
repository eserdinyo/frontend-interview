export default {
    questions: [{
        id: 1,
        title: "Describe event bubbling",
        difficulty: 1
    },
    {
        id: 2,
        title: "What is the difference between == and ===?",

        difficulty: 2
    },
    {
        id: 3,
        title: "What's the difference between .call and .apply?",
        difficulty: 3
    },
    {
        id: 4,
        title: "When would you use document.write()",
        difficulty: 2
    },
    {
        id: 5,
        title: "What is Hoisting?",
        difficulty: 2
    },
    {
        id: 6,
        title: "What are classes in ES6?",
        difficulty: 3,
        detail: 
        "<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">$initHighlight</span>(<span class=\"hljs-params\">block, cls</span>) </span>{\n  <span class=\"hljs-keyword\">try</span> {\n    <span class=\"hljs-keyword\">if</span> (cls.search(<span class=\"hljs-regexp\">/\\bno\\-highlight\\b/</span>) != <span class=\"hljs-number\">-1</span>)\n      <span class=\"hljs-keyword\">return</span> process(block, <span class=\"hljs-literal\">true</span>, <span class=\"hljs-number\">0x0F</span>) +\n             <span class=\"hljs-string\">` class=\"<span class=\"hljs-subst\">${cls}</span>\"`</span>;\n  } <span class=\"hljs-keyword\">catch</span> (e) {\n    <span class=\"hljs-comment\">/* handle exception */</span>\n  }\n  <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span> / <span class=\"hljs-number\">2</span>; i &lt; classes.length; i++) {\n    <span class=\"hljs-keyword\">if</span> (checkCondition(classes[i]) === <span class=\"hljs-literal\">undefined</span>)\n      <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'undefined'</span>);\n  }\n\n  <span class=\"hljs-keyword\">return</span> (\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">web-component</span>&gt;</span>{block}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">web-component</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  )\n}\n\n<span class=\"hljs-keyword\">export</span>  $initHighlight;\n</pre><p><br></p>"
    }],
}