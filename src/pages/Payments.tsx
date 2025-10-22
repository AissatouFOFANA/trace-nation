import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, Building2, Clock, CheckCircle, XCircle } from "lucide-react";

const Payments = () => {
  const payments = [
    {
      id: "PAY-2025-0145",
      beneficiary: "Université Cheikh Anta Diop",
      amount: "145,000,000",
      type: "Bourses étudiantes",
      method: "SenTrésor",
      status: "completed",
      date: "2025-01-15 14:32",
    },
    {
      id: "PAY-2025-0144",
      beneficiary: "Hôpital Principal de Dakar",
      amount: "89,500,000",
      type: "Équipements médicaux",
      method: "Virement bancaire",
      status: "completed",
      date: "2025-01-15 11:18",
    },
    {
      id: "PAY-2025-0143",
      beneficiary: "Étudiants - Batch 847",
      amount: "234,000,000",
      type: "Bourses",
      method: "Mobile Money",
      status: "processing",
      date: "2025-01-15 09:45",
    },
    {
      id: "PAY-2025-0142",
      beneficiary: "Entreprise BTP Sénégal SA",
      amount: "450,000,000",
      type: "Construction route",
      method: "Virement bancaire",
      status: "completed",
      date: "2025-01-14 16:22",
    },
    {
      id: "PAY-2025-0141",
      beneficiary: "Fournisseur Médical XYZ",
      amount: "67,800,000",
      type: "Fournitures médicales",
      method: "SenTrésor",
      status: "failed",
      date: "2025-01-14 13:55",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success/10 text-success hover:bg-success/20"><CheckCircle className="h-3 w-3 mr-1" />Effectué</Badge>;
      case "processing":
        return <Badge className="bg-warning/10 text-warning hover:bg-warning/20"><Clock className="h-3 w-3 mr-1" />En cours</Badge>;
      case "failed":
        return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20"><XCircle className="h-3 w-3 mr-1" />Échoué</Badge>;
      default:
        return null;
    }
  };

  const getMethodIcon = (method: string) => {
    if (method.includes("Mobile")) return <Smartphone className="h-4 w-4" />;
    if (method.includes("SenTrésor")) return <CreditCard className="h-4 w-4" />;
    return <Building2 className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Gestion des Paiements</h1>
          <p className="text-muted-foreground">Paiements automatisés et traçabilité complète</p>
        </div>

        {/* Payment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Aujourd'hui</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">986 M FCFA</div>
              <p className="text-xs text-muted-foreground mt-1">145 transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cette Semaine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.4 Mds FCFA</div>
              <p className="text-xs text-muted-foreground mt-1">1,247 transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Taux de Réussite</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">98.7%</div>
              <p className="text-xs text-muted-foreground mt-1">+0.3% vs mois dernier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Délai Moyen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2h</div>
              <p className="text-xs text-muted-foreground mt-1">Validation → Paiement</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <CreditCard className="h-5 w-5 mr-2 text-primary" />
                SenTrésor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">45%</div>
              <p className="text-sm text-muted-foreground">Paiements fonctionnaires et institutions</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Smartphone className="h-5 w-5 mr-2 text-primary" />
                Mobile Money
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">32%</div>
              <p className="text-sm text-muted-foreground">Bourses étudiantes et petits fournisseurs</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Building2 className="h-5 w-5 mr-2 text-primary" />
                Virement Bancaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">23%</div>
              <p className="text-sm text-muted-foreground">Grandes entreprises et marchés</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Transactions Récentes</CardTitle>
            <CardDescription>Historique des paiements exécutés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payments.map((payment) => (
                <div key={payment.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex-1 mb-3 md:mb-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-mono text-sm text-muted-foreground">{payment.id}</span>
                      {getStatusBadge(payment.status)}
                    </div>
                    <p className="font-semibold">{payment.beneficiary}</p>
                    <p className="text-sm text-muted-foreground">{payment.type}</p>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <p className="text-xl font-bold text-primary">{payment.amount} FCFA</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {getMethodIcon(payment.method)}
                      <span className="ml-1 mr-3">{payment.method}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      {payment.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">Voir Plus de Transactions</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Payments;
