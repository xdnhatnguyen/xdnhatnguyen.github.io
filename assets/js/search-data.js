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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed conference proceedings, project pages, and research directions in generative models and computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Experiments that make the next question clearer.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Undergraduate student in Computer Science at University of Science, VNUHCM. Researching generative models, optimal control, and computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-project-report-style-transfer-visualization",
        
          title: "Project Report: Style Transfer Visualization",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/style-transfer/";
          
        },
      },{id: "post-literature-review-stylegallery-cvpr-2026",
        
          title: "Literature Review: StyleGallery (CVPR 2026)",
        
        description: "Literature Review về Style Transfer: Paper StyleGallery tại CVPR 2026 (Presentation Slides &amp; Material).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/literature-review-stylegallery/";
          
        },
      },{id: "post-svd-based-style-transfer",
        
          title: "SVD-based Style Transfer",
        
        description: "SVD-based Style Transfer.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/svd-style-transfer/";
          
        },
      },{id: "post-compilation-of-problem-in-calculus-2",
        
          title: "Compilation of Problem in Calculus 2",
        
        description: "Compilation of challenging in Calculus 2 preparing for the exam.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/calculus-for-the-exam/";
          
        },
      },{id: "post-differential-equations-the-language-of-the-universe",
        
          title: "Differential Equations: the language of the universe",
        
        description: "Notes on the mathematical foundations of Differential Equations Theory, including Ordinary Differential Equations (ODE), Stochastic Differential Equation (SDE) and Partial Differential Equations (PDE).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ode/";
          
        },
      },{id: "post-optimal-control-pontryagin-39-s-maximum-principle-and-hjb-equation",
        
          title: "Optimal Control: Pontryagin&#39;s Maximum Principle and HJB Equation",
        
        description: "Notes on the mathematical foundations of Optimal Control Theory, including PMP and Hamilton-Jacobi-Bellman derivations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/optimal-control/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-honored-as-a-quarter-finalist-top-36-200-teams-in-coding-challenge-2026-hosted-by-the-faculty-of-information-technology-vnuhcm-university-of-science",
          title: 'Honored as a Quarter-finalist (Top 36 / 200+ teams) in Coding Challenge 2026...',
          description: "",
          section: "News",},{id: "news-leading-a-research-team-in-the-ho-chi-minh-city-ai-challenge-2026-to-develop-an-end-to-end-multimodal-video-retrieval-pipeline-integrating-lancedb-hybrid-search-and-dynamic-programming-for-temporal-sequence-matching",
          title: 'Leading a research team in the Ho Chi Minh City AI Challenge 2026...',
          description: "",
          section: "News",},{id: "news-our-paper-orthostyle-manifold-preserving-training-free-style-transfer-via-score-orthogonal-guidance-has-been-accepted-for-oral-presentation-at-soict-2026-explore-the-project-page",
          title: '🎉 Our paper OrthoStyle: Manifold-Preserving Training-Free Style Transfer via Score-Orthogonal Guidance has been...',
          description: "",
          section: "News",},{id: "projects-digits-classification-project",
          title: 'Digits Classification Project',
          description: "Team Lead | CNN vs. MLP benchmark for digit recognition (analyze model performance and architectural trade-offs).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-orthostyle-training-free-style-transfer",
          title: 'OrthoStyle: Training-Free Style Transfer',
          description: "Training-Free style transfer via score-orthogonal guidance and latent dynamics, balancing style fidelity and content preservation (Oral at SOICT 2026).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/style_transfer/";
            },},{id: "projects-video-retrieval-pipeline-ai-challenge-hcmc-2026",
          title: 'Video Retrieval Pipeline — AI Challenge HCMC 2026',
          description: "Team Lead | Active Competition. Multi-modal video retrieval (KIS, VQA, TRAKE) with LanceDB, CLIP/SigLIP, and Temporal DP.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/video_retrieval/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv/MinhNhatNguyen_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%67%75%79%65%6E%6D%69%6E%68%6E%68%61%74.%63%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xdnhatnguyen", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
