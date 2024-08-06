const about = {
  title: "Hello there, I am Tarun V G.",
  description:
    "I'm a tech-savvy and dynamic individual, a Data Science graduate with a master’s degree. I thrive in fast-paced environments, embracing challenges with gusto. Adept at communication and collaboration, I'm all about making a positive impact! ✨🚀",
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
  title: "Internship",
  experiences: [
    {  
      title: "AI Engineer",
      company:"Go Academy/ Go Labs",
      duration: "April 2024 - present",
      descrption:"
      

    },
    {
      title: "Generative AI",
      company: "Open Weaver",
      duration: "June 2023",
      description:
        "Virtual internship on Generative AI that enables learning and collaboration in building applications through open-source reuse with kandi. And as a project, I built NarrativAI which generates Stories and poems.",
    }
  
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Programming Languages",
      skills: [
      "Python", "Java", "R", "SQL", "HTML", "C", "AWS", "Machine Learning", "Statistical Analysis", "Natural Language Processing", "Image and Video Analytics", "Deep Learning"
      ],
    },
    {
      title: "Tools & IDE",
      skills: ["Power BI", "Tableau", "MS Excel", "MongoDB", "ChromaDB", "FastAPI", "Flask", "PyTorch", "Keras", "Scikit-learn", "Hugging Face Transformers", "LangChain", "BeautifulSoup"
],
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
