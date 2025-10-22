import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Eye, MapPin, School, Heart, Building, Tractor, Flag } from "lucide-react";

const CitizenPortal = () => {
  const sectors = [
    { name: "Éducation", icon: School, budget: "1,200 Mds", executed: "810 Mds", projects: 145 },
    { name: "Santé", icon: Heart, budget: "890 Mds", executed: "623 Mds", projects: 98 },
    { name: "Infrastructures", icon: Building, budget: "1,450 Mds", executed: "920 Mds", projects: 67 },
    { name: "Agriculture", icon: Tractor, budget: "680 Mds", executed: "475 Mds", projects: 123 },
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <Eye className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-3">Portail Citoyen</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Transparence totale : Consultez l'utilisation de vos impôts en temps réel
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher un projet, un ministère, une région..."
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>

        {/* National Budget Overview */}
        <Card className="mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Flag className="h-6 w-6 mr-2 text-primary" />
              Budget National 2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Budget Voté</p>
                <p className="text-3xl font-bold text-primary">5,800 Mds FCFA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Déjà Dépensé</p>
                <p className="text-3xl font-bold text-success">3,905 Mds FCFA</p>
                <p className="text-sm text-muted-foreground mt-1">67.3% exécuté</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Disponible</p>
                <p className="text-3xl font-bold text-warning">1,895 Mds FCFA</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sectors Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-6">Budget par Secteur</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Card key={sector.name} className="hover-scale cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Icon className="h-5 w-5 mr-2 text-primary" />
                      {sector.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Budget Alloué</p>
                        <p className="text-xl font-bold">{sector.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Exécuté</p>
                        <p className="text-lg font-semibold text-success">{sector.executed}</p>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground">{sector.projects} projets actifs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Major Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Grands Projets en Cours
            </CardTitle>
            <CardDescription>Suivez l'avancement des infrastructures nationales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{project.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.region}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-xl font-bold text-primary">{project.budget}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Voir Détails
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Rapport
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-3">Participez à la Transparence</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vous avez repéré une anomalie ? Signalez-la de manière confidentielle. 
              Ensemble, construisons un Sénégal plus transparent.
            </p>
            <Button size="lg" className="mr-3">Signaler une Anomalie</Button>
            <Button size="lg" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Télécharger les Données
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CitizenPortal;
