// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-my-first-blog",
        
          title: "My first blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first-blog/";
          
        },
      },{id: "news-started-my-ph-d-in-electrical-and-computer-engineering-at-the-university-of-arizona-advised-by-prof-huanrui-yang",
          title: 'Started my Ph.D. in Electrical and Computer Engineering at the University of Arizona,...',
          description: "",
          section: "News",},{id: "news-i-was-selected-as-a-dac-young-fellow-for-the-62nd-design-automation-conference",
          title: 'I was selected as a DAC Young Fellow for the 62nd Design Automation...',
          description: "",
          section: "News",},{id: "news-joined-tetramem-as-an-ai-intern-working-on-model-adaptation-for-compute-in-memory-systems",
          title: 'Joined TetraMem as an AI Intern, working on model adaptation for compute-in-memory systems....',
          description: "",
          section: "News",},{id: "news-our-paper-fier-fine-grained-and-efficient-kv-cache-retrieval-for-long-context-llm-inference-was-accepted-to-findings-of-emnlp-2025",
          title: 'Our paper, “FIER: Fine-Grained and Efficient KV Cache Retrieval for Long-context LLM Inference,”...',
          description: "",
          section: "News",},{id: "news-our-paper-far-function-preserving-attention-replacement-for-imc-friendly-inference-was-accepted-to-glsvlsi-2026",
          title: 'Our paper, “FAR: Function-preserving Attention Replacement for IMC-friendly Inference,” was accepted to GLSVLSI...',
          description: "",
          section: "News",},{id: "news-our-preprint-from-sparsity-to-simplicity-enabling-simpler-sequential-replacements-via-sparse-attention-distillation-is-now-available-on-arxiv",
          title: 'Our preprint, “From Sparsity to Simplicity: Enabling Simpler Sequential Replacements via Sparse Attention...',
          description: "",
          section: "News",},{id: "news-presented-isobar-our-simulation-framework-for-large-scale-analog-compute-in-memory-systems-at-the-university-of-arizona-s-homecoming-research-showcase",
          title: 'Presented Isobar, our simulation framework for large-scale analog compute-in-memory systems, at the University...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%78%69%6E%72@%61%72%69%7A%6F%6E%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aliothren", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ren-yuxin", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uaqlk24AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
