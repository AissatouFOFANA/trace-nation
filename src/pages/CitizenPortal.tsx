import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Eye, MapPin, School, Heart, Building, Tractor, Flag, TrendingUp, Users, AlertCircle, CheckCircle, Clock, Filter, FileText, BarChart3, PieChart, X, AlertTriangle, Calendar, Map, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

export const projects = [
  {
    id: "univ-diamniadio",
    name: "Construction Université Diamniadio",
    region: "Dakar",
    sector: "Éducation",
    budget: "45 Mds FCFA",
    progress: 78,
    status: "En cours",
    description: "Construction d'une nouvelle université à Diamniadio avec une capacité d'accueil de 10 000 étudiants.",
    startDate: "01/01/2024",
    endDate: "31/12/2025",
  },
  {
    id: "hopitaux-regionaux",
    name: "Modernisation Hôpitaux Régionaux",
    region: "Thiès, Saint-Louis, Kaolack",
    sector: "Santé",
    budget: "32 Mds FCFA",
    progress: 45,
    status: "En cours",
    description: "Modernisation des hôpitaux régionaux avec de nouveaux équipements médicaux.",
    startDate: "15/03/2024",
    endDate: "30/06/2025",
  },
  {
    id: "routes-nationales",
    name: "Réhabilitation Routes Nationales",
    region: "Toutes les régions",
    sector: "Infrastructures",
    budget: "120 Mds FCFA",
    progress: 60,
    status: "En cours",
    description: "Réhabilitation de 500 km de routes nationales à travers le pays.",
    startDate: "01/01/2024",
    endDate: "31/12/2026",
  },
  {
    id: "irrigation-casamance",
    name: "Programme d'Irrigation Casamance",
    region: "Ziguinchor, Sédhiou, Kolda",
    sector: "Agriculture",
    budget: "28 Mds FCFA",
    progress: 35,
    status: "En cours",
    description: "Mise en place de systèmes d'irrigation pour 10 000 hectares de terres agricoles.",
    startDate: "01/07/2024",
    endDate: "30/06/2026",
  },
  {
    id: "autoroute-dakar-thies",
    name: "Autoroute Dakar-Thiès Extension",
    region: "Dakar-Thiès",
    sector: "Infrastructures",
    budget: "120 Mds FCFA",
    progress: 92,
    status: "Finalisation",
    description: "Extension de l'autoroute entre Dakar et Thiès pour améliorer la circulation.",
    startDate: "01/01/2023",
    endDate: "31/12/2024",
  },
];

// Composant pour la modale de détails du projet
const ProjectDetailsModal = ({ project, isOpen, onClose, onReportIssue, toast }: { project: any, isOpen: boolean, onClose: () => void, onReportIssue: (projectId: string) => void, toast: any }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
              <DialogDescription className="text-lg">{project.region}</DialogDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Budget alloué</h3>
                <p className="text-2xl font-bold text-primary">{project.budget}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Progression</span>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Date de début</p>
                  <p className="font-medium">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date de fin prévue</p>
                  <p className="font-medium">{project.endDate}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Secteur</p>
                <Badge variant="outline" className="text-sm">
                  {project.sector}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Description du projet</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Signaler un problème</h3>
                    <p className="text-sm text-gray-600 mb-3">Vous avez constaté un problème sur ce projet ?</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                        onReportIssue(project.id);
                      }}
                    >
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Signaler une anomalie
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Documents associés</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Rapport d'avancement - {new Date().toLocaleDateString()}</p>
                    <p className="text-sm text-muted-foreground">PDF • 2.4 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => {
                  // Simuler le téléchargement
                  const link = document.createElement('a');
                  link.href = '#';
                  link.download = `rapport-${project.id}.pdf`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  
                  // Afficher une notification
                  toast({
                    title: "Téléchargement démarré",
                    description: `Le rapport pour ${project.name} est en cours de téléchargement.`,
                  });
                }}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CitizenPortal = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Fonction pour normaliser le texte pour la recherche
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // Filtrer les projets en fonction des sélections
  const filteredProjects = projects.filter(project => {
    // Normaliser les chaînes pour la comparaison
    const normalizedSearchQuery = normalizeText(searchQuery);
    const normalizedProjectName = normalizeText(project.name);
    const normalizedProjectRegion = normalizeText(project.region);
    const normalizedProjectSector = normalizeText(project.sector || '');
    
    // Vérifier la région (prend en compte les régions multiples séparées par des virgules)
    const regionMatches = selectedRegion === "all" || 
                         project.region.split(',').some(region => 
                           normalizeText(region.trim()) === selectedRegion.toLowerCase()
                         );
    
    // Vérifier le secteur
    const sectorMatches = selectedSector === "all" || 
                         normalizedProjectSector === selectedSector.toLowerCase();
    
    // Vérifier la recherche
    const searchMatches = normalizedSearchQuery === "" || 
                         normalizedProjectName.includes(normalizedSearchQuery) ||
                         normalizedProjectRegion.includes(normalizedSearchQuery) ||
                         normalizedProjectSector.includes(normalizedSearchQuery);
    
    return regionMatches && sectorMatches && searchMatches;
  });
  
  // Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Réinitialiser à la première page lorsque les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion, selectedSector, searchQuery]);
  
  // Gérer le clic sur un projet
  const handleProjectClick = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setIsDetailsModalOpen(true);
    }
  };
  
  // Gérer le téléchargement du rapport
  const handleDownloadReport = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const project = projects.find(p => p.id === projectId);
    if (project) {
      // Simuler un téléchargement
      const reportContent = `Rapport de Projet: ${project.name}\n\n` +
        `Description: ${project.description}\n` +
        `Région: ${project.region}\n` +
        `Secteur: ${project.sector}\n` +
        `Budget: ${project.budget}\n` +
        `Avancement: ${project.progress}%\n` +
        `Date de début: ${project.startDate}\n` +
        `Date de fin prévue: ${project.endDate}\n\n` +
        `Généré le: ${new Date().toLocaleDateString('fr-FR')}`;
      
      const blob = new Blob([reportContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `rapport-${project.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Téléchargement terminé",
        description: `Le rapport pour ${project.name} a été téléchargé.`,
      });
    }
  };

  // Afficher la carte du projet
  const handleShowMap = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const project = projects.find(p => p.id === projectId);
    if (project) {
      // Ouvrir Google Maps avec la localisation du projet
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.region)}`;
      window.open(mapsUrl, '_blank');
    }
  };

  // Signaler un problème
  const handleReportIssue = (projectId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    navigate(`/report-issue/${projectId}`);
  };


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


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Modal des détails du projet */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            isOpen={isDetailsModalOpen}
            onClose={() => {
              setIsDetailsModalOpen(false);
              setSelectedProject(null);
            }}
            onReportIssue={(projectId) => {
              setIsDetailsModalOpen(false);
              handleReportIssue(projectId);
            }}
            toast={toast}
          />
        )}
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
              <div className="flex gap-3">
                <Select 
                  value={selectedRegion} 
                  onValueChange={setSelectedRegion}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Toutes les régions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les régions</SelectItem>
                    {Array.from(new Set(projects.flatMap(p => p.region.split(/,|et/).map(r => r.trim()))))
                      .filter(region => region.trim() !== '')
                      .sort()
                      .map(region => (
                        <SelectItem key={region} value={region.toLowerCase()}>
                          {region}
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
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="bg-gradient-to-r from-background to-muted/30 border border-border rounded-lg p-5 hover-scale cursor-pointer transition-all duration-200 hover:shadow-md"
                >
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        const selected = projects.find(p => p.id === project.id);
                        if (selected) {
                          setSelectedProject(selected);
                          setIsDetailsModalOpen(true);
                        }
                      }}
                      className="flex items-center"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Détails
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => handleDownloadReport(project.id, e)}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Rapport
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => handleShowMap(project.id, e)}
                    >
                      <MapPin className="h-3 w-3 mr-1" />
                      Carte
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => handleReportIssue(project.id, e)}
                    >
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
