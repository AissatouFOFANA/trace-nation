import { BarChart3, Bell, FileText, GitBranch, Search, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Allocation Budgétaire Centralisée",
      description: "Saisie hiérarchique du budget national vers ministères, programmes et actions",
      benefits: ["Gestion des modifications", "Alertes dépassements", "Historique complet"]
    },
    {
      icon: Bell,
      title: "Détection IA de Fraude",
      description: "Identification automatique doublons, surfacturations, bénéficiaires fictifs",
      benefits: ["Scoring de risque 0-100", "Analyse comportementale", "Alertes en temps réel"]
    },
    {
      icon: BarChart3,
      title: "Tableaux de Bord Analytiques",
      description: "Dashboards pour ministres, ordonnateurs, contrôle et citoyens",
      benefits: ["Taux d'exécution", "Projets en cours", "Comparaisons périodes"]
    },
    {
      icon: Search,
      title: "Paiements Automatisés Tracés",
      description: "Intégration SenTrésor, Mobile Money et virements bancaires",
      benefits: ["Traçabilité blockchain", "Notifications SMS", "Reçus numériques"]
    },
    {
      icon: Shield,
      title: "Validation Multi-Niveaux",
      description: "Circuit configurable selon montants et nature des dépenses",
      benefits: ["5 niveaux validation", "Règles automatiques", "Justifications obligatoires"]
    },
    {
      icon: FileText,
      title: "Portail Citoyen Public",
      description: "Consultation budgets, projets géolocalisés, signalement anomalies",
      benefits: ["Transparence totale", "Open data", "Participation citoyenne"]
    }
  ];

  return (
    <section className="py-24 bg-[image:var(--gradient-section)]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Fonctionnalités</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Une solution complète et innovante
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Des fonctionnalités avancées pour garantir une transparence totale 
            et une lutte efficace contre les malversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-elevated)] animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
