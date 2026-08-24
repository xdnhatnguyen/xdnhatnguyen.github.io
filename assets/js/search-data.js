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
          description: "Research notes, working papers, and the mathematics behind the experiments.",
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
          description: "Second-year CS student and aspiring AI researcher building from mathematics toward computer vision and diffusion models.",
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
            },},{id: "news-take-my-recent-publication-here",
          title: 'Take my recent publication here.',
          description: "",
          section: "News",},{id: "news-honey-if-you-see-this-you-are-gay",
          title: 'Honey, if you see this, you are gay!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-sparkles-smile",
          title: ':sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-digits-classification-project",
          title: 'Digits Classification Project',
          description: "Team Lead | CNN vs. MLP benchmark for digit recognition (analyze model performance and architectural trade-offs).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-latent-patch-shuffle-style-transfer",
          title: 'Latent Patch-Shuffle Style Transfer',
          description: "Training-Free artistic style transfer via Latent Diffusion Models &amp; patch-shuffling to preserve content and eliminate grid artifacts.",
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
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
