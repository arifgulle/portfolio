import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from "@/lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";


export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Message Envoyé ! ",
                description: "Merci pour votre message. Je reviendrai vers vous."
            })
            setIsSubmitting(false)
        }, 1500)
    }
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Me <span className="text-primary">Contacter</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                N'hésitez pas à me contacter. Pour plus d'informations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Information Contact</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className=" p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="arif.gulle28@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    arif.gulle28@gmail.com
                                </a>

                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className=" p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Linkedin</h4>
                                <a href="https://linkedin.com/in/arif-gulle" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GULLE Arif</a>

                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className=" p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Localisation</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">Chartres (28), Logement étudiant à Orléans</a>

                            </div>
                        </div>
                    </div>

                    <div className="pt-8 ">
                        <h4 className="font-medium mb-4">Autres Liens</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://github.com/arifgulle" target="_blank">
                                <Github />
                            </a>
                            <a href="https://www.instagram.com/arifgulle_" target="_blank">
                                <Instagram />
                            </a>
                        </div>

                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Envoyer un Message</h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Qui êtes-vous?</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Jean Dupont..." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Votre Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="jean.dupont@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Votre Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Bonjour, je vous contacte pour..." />
                        </div>

                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}>
                            {isSubmitting ? "Chargement...": "Envoyer Message"}
                            <Send size={16} />
                        </button>

                    </form>

                </div>
            </div>
        </div>
    </section>
}