import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Brain, Eye, TrendingDown } from "lucide-react";

const FraudDetection = () => {
  const alerts = [
    {
      id: "FRD-2025-0023",
      type: "Doublon détecté",
      severity: "high",
      description: "Paiement identique au même bénéficiaire en 24h",
      ministry: "Ministère de la Santé",
      amount: "45,000,000 FCFA",
      date: "2025-01-15 14:22",
      status: "investigating",
    },
    {
      id: "FRD-2025-0022",
      type: "Surfacturation suspectée",
      severity: "critical",
      description: "Prix 180% supérieur au marché pour fournitures similaires",
      ministry: "Ministère de l'Éducation",
      amount: "89,000,000 FCFA",
      date: "2025-01-15 09:15",
      status: "escalated",
    },
    {
      id: "FRD-2025-0021",
      type: "Bénéficiaire récurrent",
      severity: "medium",
      description: "Même entreprise attributaire de 5 marchés en 3 mois",
      ministry: "Ministère des Infrastructures",
      amount: "340,000,000 FCFA",
      date: "2025-01-14 16:45",
      status: "resolved",
    },
    {
      id: "FRD-2025-0020",
      type: "Montant inhabituel",
      severity: "high",
      description: "Transaction 400% supérieure à la moyenne du programme",
      ministry: "Ministère de l'Agriculture",
      amount: "125,000,000 FCFA",
      date: "2025-01-14 11:30",
      status: "investigating",
    },
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-destructive text-destructive-foreground">Critique</Badge>;
      case "high":
        return <Badge className="bg-warning/90 text-warning-foreground">Élevée</Badge>;
      case "medium":
        return <Badge className="bg-info text-info-foreground">Moyenne</Badge>;
      default:
        return <Badge variant="secondary">Faible</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "escalated":
        return <Badge variant="destructive">Escaladée</Badge>;
      case "investigating":
        return <Badge className="bg-warning/10 text-warning">Investigation</Badge>;
      case "resolved":
        return <Badge className="bg-success/10 text-success">Résolue</Badge>;
      default:
        return <Badge variant="secondary">Nouveau</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Détection de Fraude</h1>
          <p className="text-muted-foreground">Intelligence artificielle pour la surveillance en temps réel</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-success">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Taux de Détection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">99.2%</div>
              <p className="text-xs text-muted-foreground mt-1">+2.1% ce mois</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Alertes Actives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">23</div>
              <p className="text-xs text-muted-foreground mt-1">8 critiques, 15 élevées</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                Modèle IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">v3.2</div>
              <p className="text-xs text-muted-foreground mt-1">Mise à jour : 12 Jan 2025</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingDown className="h-4 w-4 mr-2" />
                Fraude Évitée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2.8 Mds</div>
              <p className="text-xs text-muted-foreground mt-1">Depuis janvier 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Detection Capabilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2 text-primary" />
              Capacités de Détection IA
            </CardTitle>
            <CardDescription>Algorithmes de surveillance avancés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Détection de doublons", status: "Actif", accuracy: "99.8%" },
                { name: "Analyse de surfacturation", status: "Actif", accuracy: "97.3%" },
                { name: "Marchés fictifs", status: "Actif", accuracy: "95.6%" },
                { name: "Conflits d'intérêts", status: "Actif", accuracy: "94.2%" },
                { name: "Paiements inhabituels", status: "Actif", accuracy: "98.1%" },
                { name: "Bénéficiaires récurrents", status: "Actif", accuracy: "96.5%" },
              ].map((capability, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{capability.name}</p>
                    <p className="text-xs text-muted-foreground">Précision: {capability.accuracy}</p>
                  </div>
                  <Badge className="bg-success/10 text-success">{capability.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-5 w-5 mr-2 text-primary" />
              Alertes Actives
            </CardTitle>
            <CardDescription>Anomalies détectées nécessitant une investigation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.severity === 'critical' ? 'text-destructive' : 
                        alert.severity === 'high' ? 'text-warning' : 'text-info'
                      }`} />
                      <span className="font-mono text-sm text-muted-foreground">{alert.id}</span>
                      {getSeverityBadge(alert.severity)}
                      {getStatusBadge(alert.status)}
                    </div>
                    <span className="text-sm text-muted-foreground">{alert.date}</span>
                  </div>
                  <h4 className="font-semibold mb-1">{alert.type}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3 pt-3 border-t border-border">
                    <div>
                      <p className="text-sm"><span className="text-muted-foreground">Ministère:</span> <span className="font-medium">{alert.ministry}</span></p>
                      <p className="text-sm"><span className="text-muted-foreground">Montant:</span> <span className="font-bold text-primary">{alert.amount}</span></p>
                    </div>
                    <div className="flex gap-2 mt-3 md:mt-0">
                      <Button variant="outline" size="sm">Détails</Button>
                      <Button size="sm">Investiguer</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FraudDetection;
