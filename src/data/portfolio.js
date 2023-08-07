const about = {
  title: "Heyy 👋 , I am Tarun V G.",
  description:
    "Tech-savvy optimist with a can-do attitude. Thrives in fast-paced environments, embraces challenges. Adept at communication and collaboration. Let's make a positive impact! 🚀✨",
  github: "https://github.com/Pointbreak82",
  linkedin: "https://www.linkedin.com/in/tarun-v-g-270759206",
  cv: "https://drive.google.com/file/d/1Ahw4W9tRW_Kf812XEipysEIuqNGKwLJD/view?usp=sharing", 
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Performance Evaluation of Convolutional Neural Networks for Stellar Image Classification: A Comparative Study",
      short:
        "2022 Ukraine Russia War Exploratory Data Analysis.",
      description:
        "Evaluated three CNN models (ResNet, Parallel CNN, VGG16) for classifying celestial objects in the Star-Galaxy Classification dataset. Provided insights fordeveloping accurate CNN models in astronomy.",
      technologies: ["Python","TensorFlow","Scikit-learn","Keras"],
      github: "https://github.com/Pointbreak82/Star-Galaxy-Classification",
      //demo: "https://www.kaggle.com/code/ashiksanyo/russia-ukraine-war-eda",
    },
    {
      title: "NarrativAI : Story and Poem Generating Tool",
      short:
        "Using YOLOv8 to Unmanned aerial vehicle",
      description:
        "Developed NarrativAI, combining OpenAI's language model with Gradio's user-friendly interface. Enables effortless creation of captivating stories and evocative poems. Showcases proficiency in natural language processing and user interface design.",
      technologies: ["Python","NLP"],
      github: "https://github.com/Pointbreak82/NarrativAI",
      //demo: "https://github.com/ashiksanyo10/DroneXYOLOv8/blob/main/README.md",
    },
    /*
    {
      title: "PowerBI Dashboards",
      short:
        "Portfolio containing dashboards and articles of several data-sets and scenarios.",
      description:
        "Developed a Business Intelligence portfolio with real-case reports showcasing data analysis expertise.",
      technologies: [
        "PowerBI,",
        "MS Excel,",
      ],
      github: "https://www.novypro.com/profile_projects/ashiksanyo",
      demo: "https://www.novypro.com/project/us-sales-dash",

    },
    */
  ],
};

const experience = {
  title: "Internship",
  experiences: [
    {
      title: "Generative AI",
      company: "Open Weaver",
      duration: "June 2023",
      description:
        "Virtual internship on Generative AI that enables learning and collaboration in building applications through open-source reuse with kandi. And as a project, I built NarrativAI which generates Stories and poems.",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Programming Languages",
      skills: [

       "Python,",
        "C,",
        "HTML,",
        "Java,",
        "R",
        "SQL",
        "MATLAB"

      ],
    },
    {
      title: "Tools & IDE",
      skills: ["Visual Studio Code,", "PowerBI,","Excel","Tableau"],
    },
    {
      title: "Others",
      skills: ["Adobe Creative Suit,", "Blender,", "SparkAR,",],
    },
  ],
};

export { about, projects, experience, skills };
