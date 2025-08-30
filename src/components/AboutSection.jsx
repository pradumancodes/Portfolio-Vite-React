import { ArrowRight, Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> 
        {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Passionate AI/ML Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            I've gained hands-on experience across Full Stack Development, Python Automation, and Machine Learning through multiple internships. From building dynamic web applications using React and Node.js to developing data-driven Python scripts and training ML models.
                        </p>
                        <p className="text-muted-foreground">
                            I'm always eager to learn and explore new technologies, and I'm excited to collaborate, I've worked on real-world projects that solve practical problems. These experiences have strengthened my ability to design intelligent systems, write clean and efficient code, and collaborate in fast-paced tech environments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Let's Connect
                            </a>
                            <a href="https://drive.google.com/file/d/1GEsTYnGNfdNk4omFfSx64nzMOejHWLt3/view?usp=drive_link" className="cosmic-button-rgb-border">
                                View CV
                            </a>
                        </div>
                    </div>
                    
                    <div className="gird grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> <Code className="h-6 w-5 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <a className="text-muted-foreground hover:text-primary transition-colors" href="https://drive.google.com/file/d/14Gu11V_k7lKtYzxaurtTbSZ0EDgNL8-6/view?usp=drive_link" > Machine Learning & AI </a> </h4>
                                    <p className="text-muted-foreground"> Creating intelligent systems that learn, predict, and automate using Python, Scikit-Learn, and TensorFlow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> <User className="h-6 w-5 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <a className="text-muted-foreground hover:text-primary transition-colors" href="https://drive.google.com/file/d/1cd6odP-YyDBu4or6Ebkhy60insG3HGKL/view?usp=drive_link">Full Stack Development</a></h4>
                                    <p className="text-muted-foreground"> Building scalable web applications using React, Node.js, and Flask with a focus on clean architecture.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> <Briefcase className="h-6 w-5 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <a className="text-muted-foreground hover:text-primary transition-colors" href="https://drive.google.com/file/d/1A0G6dXaWOKBtMxfxLl-5HJ5thFbiuyuc/view?usp=drive_link">Python Development </a></h4>
                                    <p className="text-muted-foreground"> Developing smart Python scripts and tools to automate workflows, handle data, and simplify processes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
