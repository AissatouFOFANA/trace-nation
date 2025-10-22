import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Rapport Mensuel - Janvier 2025",
      type: "monthly",
      date: "2025-01-31",
      size: "2.4 MB",
      downloads: 145,
      status: "published",
    },
    {
      title: "Rapport Trimestriel Q4 2024",
      type: "quarterly",
      date: "2024-12-31",
      size: "5.8 MB",
      downloads: 423,
      status: "published",
    },
    {
      title: "Rapport Annuel 2024",
      type: "annual",
      date: "2024-12-31",
      size: "12.3 MB",
      downloads: 1247,
      status: "published",
    },
    {
      title: "Audit OFNAC - Janvier 2025",
      type: "audit",
      date: "2025-01-20",
      size: "3.7 MB",
      downloads: 89,
      status: "published",
    },
    {
      title: "Rapport Mensuel - Février 2025",
      type: "monthly",
      date: "2025-02-28",
      size: "0 MB",
      downloads: 0,
      status: "draft",
    },
  ];

  const getTypeBadge = (type: string) => {
    const types: Record<string, { label: string; className: string }> = {
      monthly: { label: "Mensuel", className: "bg-primary/10 text-primary" },
      quarterly: { label: "Trimestriel", className: "bg-accent/10 text-accent-foreground" },
      annual: { label: "Annuel", className: "bg-success/10 text-success" },
      audit: { label: "Audit", className: "bg-warning/10 text-warning" },
    };
    const config = types[type] || types.monthly;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    return status === "published" ? (
      <Badge className="bg-success/10 text-success">Publié</Badge>
    ) : (
      <Badge variant="secondary">Brouillon</Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Rapports et Analyses</h1>
          <p className="text-muted-foreground">Génération automatique de rapports budgétaires et d'audit</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Générer un Rapport
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Créez un rapport personnalisé selon vos critères
              </p>
              <Button className="w-full">Nouveau Rapport</Button>
            </CardContent>
          </Card>
          <Card className="hover-scale cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                Analyses Statistiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Visualisations et analyses des données budgétaires
              </p>
              <Button variant="outline" className="w-full">Voir Analyses</Button>
            </CardContent>
          </Card>
          <Card className="hover-scale cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <PieChart className="h-5 w-5 mr-2 text-primary" />
                Tableaux de Bord
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Dashboards interactifs avec indicateurs clés
              </p>
              <Button variant="outline" className="w-full">Ouvrir Dashboard</Button>
            </CardContent>
          </Card>
        </div>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Rapports Mensuels", count: 12, icon: Calendar },
            { label: "Rapports Trimestriels", count: 4, icon: TrendingUp },
            { label: "Rapports Annuels", count: 1, icon: FileText },
            { label: "Audits", count: 8, icon: BarChart3 },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-3xl font-bold">{item.count}</p>
                    </div>
                    <Icon className="h-8 w-8 text-primary opacity-50" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Reports Library */}
        <Card>
          <CardHeader>
            <CardTitle>Bibliothèque de Rapports</CardTitle>
            <CardDescription>Tous les rapports générés et publiés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start space-x-4 mb-3 md:mb-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{report.title}</h4>
                        {getTypeBadge(report.type)}
                        {getStatusBadge(report.status)}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(report.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span>{report.size}</span>
                        {report.status === "published" && (
                          <span className="flex items-center">
                            <Download className="h-3 w-3 mr-1" />
                            {report.downloads} téléchargements
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {report.status === "published" ? (
                      <>
                        <Button variant="outline" size="sm">
                          Voir
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Télécharger
                        </Button>
                      </>
                    ) : (
                      <Button variant="secondary" size="sm">
                        Finaliser
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Options d'Export</CardTitle>
            <CardDescription>Formats disponibles pour les rapports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["PDF", "Excel", "Word", "CSV"].map((format) => (
                <Button key={format} variant="outline" className="h-20">
                  <div className="text-center">
                    <Download className="h-6 w-6 mx-auto mb-2" />
                    <span>{format}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;
