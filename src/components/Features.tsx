import { BarChart3, Bell, FileText, GitBranch, Search, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Traçabilité complète",
      description: "Suivi de bout en bout de chaque dépense publique, du ministère au fournisseur final",
      benefits: ["Historique complet", "Chaîne de responsabilité", "Preuves cryptographiques"]
    },
    {
      icon: Bell,
      title: "Alertes intelligentes",
      description: "Détection automatique des anomalies et des schémas suspects via IA",
      benefits: ["Analyse en temps réel", "Notifications instantanées", "Prévention proactive"]
    },
    {
      icon: BarChart3,
      title: "Tableaux de bord analytiques",
      description: "Visualisation intuitive des flux budgétaires pour tous les acteurs",
      benefits: ["Rapports personnalisés", "KPIs en temps réel", "Tendances et prévisions"]
    },
    {
      icon: Search,
      title: "Audit automatisé",
      description: "Contrôles systématiques et génération automatique de rapports d'audit",
      benefits: ["Conformité continue", "Pistes d'audit", "Documentation automatique"]
    },
    {
      icon: Shield,
      title: "Contrôle d'accès granulaire",
      description: "Permissions multiniveaux adaptées à chaque profil utilisateur",
      benefits: ["Rôles personnalisés", "Authentification forte", "Traçabilité des accès"]
    },
    {
      icon: FileText,
      title: "Portail citoyen",
      description: "Interface publique pour consulter l'utilisation des fonds publics",
      benefits: ["Open data", "Recherche simple", "Transparence totale"]
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
