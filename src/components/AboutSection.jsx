import { Bot, Briefcase, Code, MapIcon, User } from "lucide-react";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                A <span className="text-primary"> Propos</span>
            </h2>
            <div className="grid gris-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Objectif</h3>
                    <p className="text-muted-foreground">
                        Étudiant en 3ᵉ année de licence MIAGE à l’Université d’Orléans,
                        je recherche un stage à partir du <strong className="text-primary">12 mai 2026</strong> dans le développement
                        logiciel ou web afin de renforcer mes compétences.
                        Je prévois ensuite de poursuivre en <strong className="text-primary">Master MIAGE en alternance</strong> pour me spécialiser en développement full-stack.
                    </p>
                    <p className="text-muted-foreground">
                        Motivé, curieux et rigoureux, je souhaite mettre en pratique mes compétences en conception, développement et gestion de projet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact
                        </a>
                        <a href="/CV-GULLE-Arif-MIAGE-stage.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Télécharger CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Développement Web</h4>
                                <p className="text-muted-foreground">Création d'une application web en Django dans le cadre d’un projet universitaire.</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Qualités</h4>
                                <p className="text-muted-foreground">Communication & travail d’équipe, Autonomie et organisation, Curiosité & envie d’apprendre</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Ce que je recherche</h4>
                                <p className="text-muted-foreground">Un stage où je peux contribuer à des projets concrets, apprendre aux côtés d’une équipe expérimentée et évoluer vers un rôle full-stack.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}