import { Heart, Building2, GraduationCap, TrendingUp } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Économies budgétaires",
      value: "Jusqu'à 30%",
      description: "Réduction des pertes liées aux malversations et optimisation des dépenses publiques"
    },
    {
      icon: Building2,
      title: "Confiance institutionnelle",
      value: "+85%",
      description: "Amélioration de la perception citoyenne et renforcement de la légitimité de l'État"
    },
    {
      icon: Heart,
      title: "Services publics",
      value: "Amélioration directe",
      description: "Plus de ressources pour la santé, l'éducation et les infrastructures"
    },
    {
      icon: GraduationCap,
      title: "Gouvernance exemplaire",
      value: "Standard régional",
      description: "Positionnement du Sénégal comme leader africain de la transparence budgétaire"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[image:var(--gradient-hero)]" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Impact Attendu</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Un avenir transformé pour le Sénégal
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Au-delà de la technologie, notre plateforme vise à restaurer la confiance 
            et à permettre un développement durable du pays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 bg-card animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <impact.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {impact.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-primary mb-3">
                    {impact.value}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="relative overflow-hidden rounded-2xl bg-[image:var(--gradient-hero)] p-12 text-center animate-scale-in">
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Rejoignez la transformation
            </h3>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ensemble, construisons un Sénégal transparent, responsable et prospère.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent hover:bg-accent/90 text-primary font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Nous contacter
              </a>
              
              <a 
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg transition-all backdrop-blur-sm bg-white/5"
              >
                Demander une démo
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Impact;
