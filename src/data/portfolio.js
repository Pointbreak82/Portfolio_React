const about = {
  title: "Hello there, I am Tarun V G.",
  description:
    "I’m a tech-savvy and dynamic individual, a Data Science graduate with a master’s degree, with hands-on experience building enterprise-grade AI systems across multiple domains. I thrive in fast-paced environments, tackling complex problems and delivering scalable, data-driven solutions. Adept at communication and cross-functional collaboration, I focus on translating cutting-edge AI research into reliable, production-ready systems that create measurable business impact.",
  github: "https://github.com/Pointbreak82",
  linkedin: "https://www.linkedin.com/in/tarun-v-g-270759206",
  cv: "https://drive.google.com/file/d/1YE-CXJwhmCtyQ3S2asik7Icy4s-otaTA/view?usp=sharing", 
};

const projects = {
  title: "Projects",
  personalProjects: [

      {
      title: "Satellite Image Time Series Analysis for Crop Mapping",
      description:
        "Implemented U-Net model to perform semantic segmentation of Sentinel-2 data.This enabled effective land cover classification and geospatial information extraction",
      technologies: [
      "Scikit-learn", "Scikit-image", "PyTorch", "Python"
      ],
      github: "https://github.com/Pointbreak82/Satellite-Image-Time-Series",
      //demo: "https://www.novypro.com/project/us-sales-dash",

    },

      {
      title: "End to End Toxic Comment Classification",
      description:
        "Developed a user-friendly interface for real-time hate speech and toxic comment detection. Used a LSTM-based model categorizing toxic comments into six types.",
      technologies: [
      "TensorFlow", "Keras", "Streamlit", "Python"
      ],
      github: "https://github.com/Pointbreak82/Toxic-Comment-2",
      demo: "https://ieeexplore.ieee.org/document/10594466",

    },
    
    {
      title: "Comparative Analysis of CNNs for Stellar Image Classification.",
      description:
        "Evaluated ResNet, Parallel CNN, and VGG16 on Star-Galaxy Classification dataset to classify celestial objects. Offered insights for accurate astronomy CNN models.",
      technologies: ["Python","TensorFlow","Scikit-learn"],
      github: "https://github.com/Pointbreak82/Star-Galaxy-Classification",
      demo: "https://ieeexplore.ieee.org/abstract/document/10244794",
    },
    // {
    //   title: "NarrativAI : Story and Poem Generating Tool",
    //   //short:
    //    // "Using YOLOv8 to Unmanned aerial vehicle",
    //   description:
    //     "Developed NarrativAI, A Easy storytelling and poetic creation with OpenAI's language model and Gradio's user-friendly interface.",
    //   technologies: ["Python","NLP"],
    //   github: "https://github.com/Pointbreak82/NarrativAI",
    //   //demo: "https://github.com/ashiksanyo10/DroneXYOLOv8/blob/main/README.md",
    // },
    

    
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "AI Technology Consultant",
      company: "Inferworks",
      duration: "August 2024 – Present",
      description: `
**Enterprise AI Quality Engineering Platform**

- Built an event-driven AI testing platform for shift-left engineering with a multi-agent requirements intelligence pipeline powered by vLLM-backed LLM serving that identifies requirement ambiguities using 5C and INVEST principles, refines user stories, generates acceptance criteria, and creates comprehensive test scenarios.
- Engineered autonomous test generation systems producing Playwright-based UI automation and API test suites, implemented feature-level intelligence that cut regression suite size by 40–60% per release.
- Developed a Kafka-based orchestration layer with Redis and Milvus for context management and knowledge graphs with 10M+ historical artifacts, supporting 100+ concurrent pipelines.

**Multi-Agent Orchestrator Framework**

- Led the design and implementation of a multi-agent orchestration framework using CrewAI to automate ITIL workflows with vLLM-based LLM serving for semantic classification, intent detection, and intelligent agent delegation.
- Engineered scalable context and retrieval layers using Redis for session memory, Milvus for vector embedding storage, and custom connectors for Microsoft 365, Confluence, ServiceNow, and PDF repositories, enabling enterprise-grade RAG with low-latency vLLM inference.

**Quick Commerce Data Pipeline and Analytics**

- Built a scalable web scraping pipeline for Quick Commerce platforms using Selenium, BeautifulSoup, and Dask with API-based crawlers making it 9× faster.
- Developed a FastAPI-based self-serve client onboarding platform using Playwright and ScrapeGraphAI for AI-driven keyword generation enabling end-to-end onboarding in under 10 minutes.
- Created interactive Retool dashboards used by 15+ stakeholders delivering real-time insights across 20k+ SKUs with AI-driven bid recommendations improving ROAS.
      `
    },
    {
      title: "AI Engineer",
      company: "Go Academy/ Go Labs",
      duration: "April 2024 - present",
      description: `
- **Object Detection Pipeline**: Developed a YOLO-based pipeline for object detection in video frames, enabling keyword-based clip generation and summary creation, enhancing content analysis and annotation.
- **Text Extraction & Summarization**: Automated text extraction and summarization from PDFs and websites using open-source Large Language Models (LLMs) and advanced NLP techniques.
- **Data Processing & Analysis Pipelines**: Designed and optimized data pipelines using Python, MongoDB, and FastAPI, enhancing data handling and reporting efficiency. Applied data analysis and visualization techniques to generate insights, improving reporting accuracy.
- **Blog Recommendation System**: Created a scalable recommendation system with Dask and BERT embeddings for semantic text analysis. Implemented ChromaDB and Flask API for scalable data querying and dynamic recommendations.
- **NLP & AI Exploration**: Explored Llama 2, Llama 3, and LangChain for advanced NLP and AI applications.
      `
    },
    {
      title: "Generative AI",
      company: "Open Weaver",
      duration: "June 2023",
      description: "Virtual internship on Generative AI that enables learning and collaboration in building applications through open-source reuse with kandi. As a project, I built NarrativAI, which generates stories and poems."
    }
  ]
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Technical Skills",
      skills: ["Python", "SQL", "Java", "Event-Driven Architectures", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Time Series Analysis", "Statistical Analysis", "Data Engineering"],
    },
    {
      title: "Tools & Libraries",
      skills: ["vLLM", "CrewAI", "LangGraph", "LangChain", "Hugging Face Transformers", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "YOLO", "Kafka", "Redis", "MongoDB", "PostgreSQL", "Neo4j", "Milvus", "ChromaDB", "AWS (S3 and compute services)", "FastAPI", "Flask", "SQLAlchemy", "Playwright", "Selenium", "BeautifulSoup", "Retool", "Power BI", "Tableau"],
    },
    /*
    {
      title: "Others",
      skills: ["Adobe Creative Suit,", "Blender,", "SparkAR,",],
    },
    */
  ],
};

export { about, projects, experience, skills };
