import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,

        title: "Falcon AI - Your Personalized Voice Assistant",
        
        description: "Falcon AI is a smart voice-controlled assistant built using Python and Eel.",
        
        image: "/projects/Project 1.png",
        
        tags: ["Python", "Voice Assistant", "Speech Recognition", "pvporcupine", "pyttsx3", "HuggingFace", "Eel", "SQLite", 
        "Automation"],

        demoUrl: "#",

        githubUrl: "https://github.com/pradumancodes/Falcon-AI",
    },


    {
        id: 2,

        title: "Hate Speech Detection - Multi-label Classification using BERT & NLP",
        
        description: "A robust machine learning project that detects and classifies hate speech into multiple categories using natural language processing and deep learning.",
        
        image: "/projects/Project 2.png",
        
        tags: ["Python", "Machine Learning", "NLP", "BERT", "TF-IDF", "Text Classification", "Hate Speech Detection", "Pandas", "Scikit-learn", "Multi-label Classification"],

        demoUrl: "#",

        githubUrl: "https://github.com/pradumancodes/Hate-Speech-Detection",
    },


    {
        id: 3,

        title: "Music Recommender System - Predictive Listening Behaviour using ML",
        
        description: "Developed a machine learning-based music recommendation system inspired by Spotify's approach, leveraging user listening history, timestamps, and track metadata from the Million Song Dataset + Last.fm.",
        
        image: "/projects/Project 3.png",
        
        tags: ["Python", "Machine Learning", "Recommendation System", "Pandas", "Scikit-learn", "Data Analysis", "Million Song Dataset"],

        demoUrl: "#",

        githubUrl: "https://github.com/pradumancodes/Music-Recommender-System",
    },

    
    {
        id: 4,

        title: "Pixel Editor - Python-Based Image Manipulation Tool",
        
        description: "A simple yet functional pixel editing tool built using Python and Tkinter that allows users to open, modify, and save images.",
        
        image: "/projects/Project 4.png",
        
        tags: ["Python", "Tkinter", "Image Processing", "OpenCV", "GUI", "Pixel Editor", "PIL", "Photo Editing", "Mini Project"],

        demoUrl: "#",

        githubUrl: "https://github.com/pradumancodes/Pixel-Editing",
    },


    {
        id: 5,

        title: "Fruitables - Modern Responsive Website for Organic Products",
        
        description: "A fully responsive, modern frontend website built for a fictional organic food brand 'Fruitables'.",
        
        image: "/projects/Project 5.png",
        
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Frontend Development", "UI/UX", "Website Project"],

        demoUrl: "#",

        githubUrl: "https://github.com/pradumancodes/Fruitables-Website",
    },

];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my most impactful and creative projects that showcase my skills in AI, Web Development, Machine Learning, and Software Engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg border font-semibold mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm mb-4 flex-1">
                                    {project.description}
                                </p>
                            </div>

                            {/* Footer (Icons) */}
                            <div className="px-6 pb-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href= "https://github.com/pradumancodes" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight size={16} />
                    </a>

                </div>
            </div>
        </section>
    );
};
