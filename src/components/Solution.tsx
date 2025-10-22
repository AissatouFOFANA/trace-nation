import { CheckCircle2, Layers, Lock, Zap } from "lucide-react";

const Solution = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Blockchain souveraine",
      description: "Infrastructure décentralisée garantissant l'immutabilité et la traçabilité de chaque transaction"
    },
    {
      icon: Lock,
      title: "Sécurité maximale",
      description: "Cryptographie avancée et protocoles de sécurité conformes aux normes internationales"
    },
    {
      icon: Zap,
      title: "Temps réel",
      description: "Suivi instantané des flux budgétaires et alertes automatiques en cas d'anomalie"
    },
    {
      icon: CheckCircle2,
      title: "Conformité totale",
      description: "Respect du cadre réglementaire sénégalais et des standards internationaux de transparence"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Notre Solution</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Une plateforme souveraine de{" "}
            <span className="text-primary">traçabilité budgétaire totale</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Un système innovant qui trace chaque franc CFA du budget national, 
            de son allocation initiale jusqu'à son exécution finale, en temps réel.
          </p>
        </div>

        {/* Core principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key features highlight */}
        <div className="relative overflow-hidden rounded-2xl bg-[image:var(--gradient-hero)] p-12 animate-scale-in">
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-bold text-white mb-6">
              Transparence totale, confiance restaurée
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-white/90">des transactions tracées</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-accent mb-2">&lt;1s</div>
                <p className="text-white/90">délai de détection des anomalies</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-white/90">surveillance continue</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
