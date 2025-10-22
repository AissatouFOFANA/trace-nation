import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              À propos
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Projet développé par une équipe de Master 1 GLSI de l'École Supérieure 
              Polytechnique de Dakar dans le cadre du Hackathon National de Transparence.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@transparence.sn" className="hover:text-accent transition-colors">
                  contact@transparence.sn
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+221 XX XXX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>ESP Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Liens utiles
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#solution" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  La solution
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#impact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#demo" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Demander une démo
                </a>
              </li>
            </ul>
          </div>
          
          {/* Team */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Équipe
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Master 1 en Génie Logiciel et Systèmes d'Information
            </p>
            <p className="text-primary-foreground/80 text-sm">
              École Supérieure Polytechnique (ESP)
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © 2024 Plateforme Nationale de Transparence Budgétaire. Tous droits réservés.
            </p>
            <p>
              République du Sénégal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
