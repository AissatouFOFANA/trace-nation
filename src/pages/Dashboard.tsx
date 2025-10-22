import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Users, FileText, Shield } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Budget Total 2025",
      value: "5,800 Mds FCFA",
      change: "+12% vs 2024",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Taux d'Exécution",
      value: "67.3%",
      change: "En progression",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Alertes Fraude",
      value: "23",
      change: "-45% ce mois",
      trend: "down",
      icon: AlertTriangle,
    },
    {
      title: "Transactions Validées",
      value: "12,847",
      change: "+8% cette semaine",
      trend: "up",
      icon: CheckCircle,
    },
  ];

  const recentActivities = [
    { ministry: "Ministère de l'Éducation", amount: "45 Mds FCFA", status: "Validé", time: "Il y a 2h" },
    { ministry: "Ministère de la Santé", amount: "28 Mds FCFA", status: "En attente", time: "Il y a 3h" },
    { ministry: "Ministère des Infrastructures", amount: "67 Mds FCFA", status: "Validé", time: "Il y a 5h" },
    { ministry: "Ministère de l'Agriculture", amount: "32 Mds FCFA", status: "En révision", time: "Il y a 1j" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Tableau de Bord National</h1>
          <p className="text-muted-foreground">Vue d'ensemble de l'exécution budgétaire en temps réel</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm flex items-center ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>
                    {stat.trend === "up" ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Activités Récentes
              </CardTitle>
              <CardDescription>Dernières demandes de décaissement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{activity.ministry}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{activity.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === "Validé" ? "bg-success/10 text-success" :
                        activity.status === "En attente" ? "bg-warning/10 text-warning" :
                        "bg-secondary text-secondary-foreground"
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Budget by Sector */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Répartition Budgétaire
              </CardTitle>
              <CardDescription>Par secteur prioritaire</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { sector: "Éducation", amount: "1,200 Mds", percent: 21 },
                  { sector: "Santé", amount: "890 Mds", percent: 15 },
                  { sector: "Infrastructures", amount: "1,450 Mds", percent: 25 },
                  { sector: "Agriculture", amount: "680 Mds", percent: 12 },
                  { sector: "Autres", amount: "1,580 Mds", percent: 27 },
                ].map((sector, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{sector.sector}</span>
                      <span className="text-sm text-muted-foreground">{sector.amount}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${sector.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Status */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              État de Sécurité du Système
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="font-medium">Blockchain Active</p>
                  <p className="text-sm text-muted-foreground">Toutes les transactions sécurisées</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="font-medium">Détection IA</p>
                  <p className="text-sm text-muted-foreground">Surveillance en temps réel</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="font-medium">Audits à Jour</p>
                  <p className="text-sm text-muted-foreground">Dernière vérification : aujourd'hui</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
