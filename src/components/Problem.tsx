import { AlertTriangle, TrendingDown, Users, FileX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "161 Milliards FCFA",
      description: "Pertes annuelles dues à la fraude et l'évasion fiscales (PressAfrik, 2024)",
      color: "text-destructive"
    },
    {
      icon: TrendingDown,
      title: "3,5 Milliards FCFA",
      description: "Fraude de sociétés pétrolières ayant collecté des taxes sans les reverser au Trésor public",
      color: "text-destructive"
    },
    {
      icon: Users,
      title: "Méfiance Généralisée",
      description: "Défiance profonde entre citoyens, institutions et partenaires internationaux (Banque mondiale, FMI, BAD)",
      color: "text-destructive"
    },
    {
      icon: FileX,
      title: "138 Millions FCFA",
      description: "Détournement présumé lié au Fonds Covid-19 à l'hôpital Dalal Jamm (Souleymane, 2025)",
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-24 bg-[image:var(--gradient-section)]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Urgence Nationale</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Une Hémorragie Financière qui Mine la <span className="text-primary">Crédibilité</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Le Sénégal traverse une crise de gouvernance financière avec 161 milliards FCFA perdus annuellement à cause de la fraude et l'évasion fiscales. Cette situation compromet le développement et la crédibilité internationale du pays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-destructive/10">
                    <problem.icon className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact stats */}
        <div className="mt-16 p-8 rounded-2xl bg-destructive/5 border-2 border-destructive/20 animate-fade-in">
          <p className="text-center text-lg text-foreground/80 mb-4">
            <span className="font-bold text-destructive text-2xl">Le coût : </span>
            <span className="text-foreground">
              Des hôpitaux sans équipements, des écoles délabrées, des routes impraticables, 
              et une population qui perd confiance en ses institutions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
