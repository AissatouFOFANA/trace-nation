import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Eye, MapPin, School, Heart, Building, Tractor, Flag, TrendingUp, Users, AlertCircle, CheckCircle, Clock, Filter, FileText, BarChart3, PieChart } from "lucide-react";
import { useState } from "react";

const CitizenPortal = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const sectors = [
    { name: "Éducation", icon: School, budget: "1,200 Mds", executed: "810 Mds", projects: 145, rate: 67.5, color: "text-blue-600" },
    { name: "Santé", icon: Heart, budget: "890 Mds", executed: "623 Mds", projects: 98, rate: 70.0, color: "text-red-600" },
    { name: "Infrastructures", icon: Building, budget: "1,450 Mds", executed: "920 Mds", projects: 67, rate: 63.4, color: "text-purple-600" },
    { name: "Agriculture", icon: Tractor, budget: "680 Mds", executed: "475 Mds", projects: 123, rate: 69.9, color: "text-green-600" },
  ];

  const regions = [
    { name: "Dakar", budget: "1,850 Mds", executed: "1,295 Mds", rate: 70 },
    { name: "Thiès", budget: "580 Mds", executed: "392 Mds", rate: 67.6 },
    { name: "Saint-Louis", budget: "420 Mds", executed: "273 Mds", rate: 65 },
    { name: "Kaolack", budget: "380 Mds", executed: "247 Mds", rate: 65 },
    { name: "Ziguinchor", budget: "450 Mds", executed: "292 Mds", rate: 64.9 },
    { name: "Diourbel", budget: "340 Mds", executed: "224 Mds", rate: 65.9 },
  ];

  const recentTransactions = [
    { date: "15 Oct 2025", description: "Bourses Universitaires Q3", amount: "45 Mds FCFA", beneficiaries: 12580, status: "completed" },
    { date: "12 Oct 2025", description: "Salaires Enseignants Octobre", amount: "82 Mds FCFA", beneficiaries: 45230, status: "completed" },
    { date: "10 Oct 2025", description: "Équipements Hôpitaux Régionaux", amount: "18 Mds FCFA", beneficiaries: 8, status: "completed" },
    { date: "08 Oct 2025", description: "Maintenance Routes Nationales", amount: "25 Mds FCFA", beneficiaries: 15, status: "in-progress" },
    { date: "05 Oct 2025", description: "Programme Irrigation Casamance", amount: "12 Mds FCFA", beneficiaries: 3420, status: "in-progress" },
  ];

  const projects = [
    {
      name: "Construction Université Diamniadio",
      region: "Dakar",
      budget: "45 Mds FCFA",
      progress: 78,
      status: "En cours",
    },
    {
      name: "Modernisation Hôpitaux Régionaux",
      region: "Thiès, Saint-Louis, Kaolack",
      budget: "32 Mds FCFA",
      progress: 65,
      status: "En cours",
    },
    {
      name: "Autoroute Dakar-Thiès Extension",
      region: "Dakar-Thiès",
      budget: "120 Mds FCFA",
      progress: 92,
      status: "Finalisation",
    },
    {
      name: "Programme d'Irrigation Casamance",
      region: "Ziguinchor",
      budget: "28 Mds FCFA",
      progress: 45,
      status: "En cours",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 shadow-lg">
            <Eye className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-3">Portail Citoyen</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Transparence totale : Consultez l'utilisation de vos impôts en temps réel
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un projet, un ministère, une région..."
                  className="pl-12 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12">
                <Filter className="h-5 w-5 mr-2" />
                Filtrer
              </Button>
            </div>
            <div className="flex gap-3 justify-center">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Toutes les régions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les régions</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region.name} value={region.name.toLowerCase()}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tous les secteurs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les secteurs</SelectItem>
                  {sectors.map(sector => (
                    <SelectItem key={sector.name} value={sector.name.toLowerCase()}>
                      {sector.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* National Budget Overview */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-elevated">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Flag className="h-6 w-6 text-primary" />
              Budget National 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-6">
              <div className="bg-background/50 backdrop-blur rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  <p className="text-sm font-medium text-muted-foreground">Budget Voté</p>
                </div>
                <p className="text-3xl font-bold text-primary">5,800 Mds</p>
                <p className="text-xs text-muted-foreground mt-1">FCFA</p>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-success mr-2" />
                  <p className="text-sm font-medium text-muted-foreground">Exécuté</p>
                </div>
                <p className="text-3xl font-bold text-success">3,905 Mds</p>
                <p className="text-xs text-muted-foreground mt-1">67.3% du budget</p>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-warning mr-2" />
                  <p className="text-sm font-medium text-muted-foreground">Disponible</p>
                </div>
                <p className="text-3xl font-bold text-warning">1,895 Mds</p>
                <p className="text-xs text-muted-foreground mt-1">32.7% restant</p>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-info mr-2" />
                  <p className="text-sm font-medium text-muted-foreground">Bénéficiaires</p>
                </div>
                <p className="text-3xl font-bold text-info">2.8M+</p>
                <p className="text-xs text-muted-foreground mt-1">citoyens impactés</p>
              </div>
            </div>
            <div className="bg-background/30 backdrop-blur rounded-lg p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Taux d'exécution global</span>
                <span className="font-bold text-primary">67.3%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4">
                <div className="bg-gradient-to-r from-primary via-success to-accent h-4 rounded-full transition-all duration-500" style={{ width: "67.3%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="sectors" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="sectors">
              <PieChart className="h-4 w-4 mr-2" />
              Secteurs
            </TabsTrigger>
            <TabsTrigger value="regions">
              <MapPin className="h-4 w-4 mr-2" />
              Régions
            </TabsTrigger>
            <TabsTrigger value="transactions">
              <TrendingUp className="h-4 w-4 mr-2" />
              Transactions
            </TabsTrigger>
            <TabsTrigger value="stats">
              <BarChart3 className="h-4 w-4 mr-2" />
              Statistiques
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sectors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <Card key={sector.name} className="hover-scale cursor-pointer bg-gradient-to-br from-card to-muted/20 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg mr-3">
                          <Icon className={`h-5 w-5 ${sector.color}`} />
                        </div>
                        {sector.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Budget Alloué</p>
                          <p className="text-xl font-bold">{sector.budget}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Exécuté</p>
                          <p className="text-lg font-semibold text-success">{sector.executed}</p>
                        </div>
                        <div className="pt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Taux d'exécution</span>
                            <span className="font-medium">{sector.rate}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-gradient-to-r from-primary to-success h-2 rounded-full" style={{ width: `${sector.rate}%` }}></div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-border flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">{sector.projects} projets</p>
                          <Badge variant="secondary">{sector.rate >= 67 ? "On Track" : "Attention"}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="regions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <Card key={region.name} className="hover-scale cursor-pointer bg-gradient-to-br from-card to-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        {region.name}
                      </div>
                      <Badge variant={region.rate >= 67 ? "default" : "secondary"}>
                        {region.rate}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Budget</p>
                          <p className="text-lg font-bold">{region.budget}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Exécuté</p>
                          <p className="text-lg font-semibold text-success">{region.executed}</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: `${region.rate}%` }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card className="bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Transactions Récentes
                </CardTitle>
                <CardDescription>Les dernières dépenses publiques effectuées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="bg-background/50 backdrop-blur rounded-lg p-4 border border-border hover-scale cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                              {transaction.status === "completed" ? (
                                <>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Complété
                                </>
                              ) : (
                                <>
                                  <Clock className="h-3 w-3 mr-1" />
                                  En cours
                                </>
                              )}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{transaction.date}</span>
                          </div>
                          <h4 className="font-semibold text-lg mb-1">{transaction.description}</h4>
                          <p className="text-sm text-muted-foreground">
                            <Users className="h-3 w-3 inline mr-1" />
                            {transaction.beneficiaries.toLocaleString()} bénéficiaires
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{transaction.amount}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Eye className="h-3 w-3 mr-1" />
                            Détails
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-card to-success/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-success" />
                    Performance d'Exécution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-background/50 backdrop-blur rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Moyenne Nationale</p>
                    <p className="text-3xl font-bold text-success">67.3%</p>
                    <p className="text-xs text-muted-foreground mt-1">+3.2% vs année dernière</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Meilleur secteur</span>
                      <span className="font-semibold">Santé (70%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Meilleure région</span>
                      <span className="font-semibold">Dakar (70%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-info/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-info" />
                    Impact Social
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 backdrop-blur rounded-lg p-4 text-center">
                      <School className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-2xl font-bold">145</p>
                      <p className="text-xs text-muted-foreground">Écoles construites</p>
                    </div>
                    <div className="bg-background/50 backdrop-blur rounded-lg p-4 text-center">
                      <Heart className="h-6 w-6 mx-auto mb-2 text-red-600" />
                      <p className="text-2xl font-bold">98</p>
                      <p className="text-xs text-muted-foreground">Centres de santé</p>
                    </div>
                    <div className="bg-background/50 backdrop-blur rounded-lg p-4 text-center">
                      <Building className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                      <p className="text-2xl font-bold">67</p>
                      <p className="text-xs text-muted-foreground">Infrastructures</p>
                    </div>
                    <div className="bg-background/50 backdrop-blur rounded-lg p-4 text-center">
                      <Users className="h-6 w-6 mx-auto mb-2 text-info" />
                      <p className="text-2xl font-bold">2.8M</p>
                      <p className="text-xs text-muted-foreground">Bénéficiaires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Major Projects */}
        <Card className="bg-gradient-to-br from-card to-primary/5 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Grands Projets en Cours
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardTitle>
            <CardDescription>Suivez l'avancement des infrastructures nationales en temps réel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-r from-background to-muted/30 border border-border rounded-lg p-5 hover-scale cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.region}
                        </div>
                        <Badge variant={project.progress >= 75 ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 text-right">
                      <p className="text-2xl font-bold text-primary mb-1">{project.budget}</p>
                      <p className="text-xs text-muted-foreground">Budget total</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground font-medium">Progression</span>
                      <span className="font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-primary via-success to-accent h-4 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      Détails
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Rapport
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      Carte
                    </Button>
                    <Button variant="outline" size="sm">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Signaler
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-gradient-to-br from-primary/15 to-accent/15 border-primary/30 shadow-elevated">
            <CardContent className="py-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                <AlertCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Signaler une Anomalie</h3>
              <p className="text-muted-foreground mb-6">
                Vous avez repéré une irrégularité ? Aidez-nous à maintenir la transparence.
              </p>
              <Button size="lg" className="w-full md:w-auto">
                <AlertCircle className="h-4 w-4 mr-2" />
                Faire un Signalement
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-info/15 to-primary/15 border-info/30 shadow-elevated">
            <CardContent className="py-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-info to-primary rounded-full mb-4">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Données Ouvertes</h3>
              <p className="text-muted-foreground mb-6">
                Téléchargez les données budgétaires en format ouvert (CSV, JSON, Excel).
              </p>
              <Button size="lg" variant="outline" className="w-full md:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Télécharger les Données
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <Card className="mt-8 bg-gradient-to-r from-success/10 via-primary/10 to-accent/10 border-primary/20">
          <CardContent className="py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">433</p>
                <p className="text-sm text-muted-foreground mt-1">Projets actifs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-success">14</p>
                <p className="text-sm text-muted-foreground mt-1">Régions couvertes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-warning">2.8M+</p>
                <p className="text-sm text-muted-foreground mt-1">Citoyens bénéficiaires</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-info">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Accès en temps réel</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CitizenPortal;
