hexo.extend.injector.register(
  "head_begin",
  `
<link rel="stylesheet" href="/css/custom-theme.css">
<link rel="stylesheet" href="/css/animation.css">
`,
  "default"
);

hexo.extend.injector.register(
  "head_end",
  `
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>
<script src="/js/global.js"></script>
<script src="/js/cat/custom-utils.js"></script>
<script src="/js/cat/onClick.js"></script>
`,
  "default"
);