import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, MapPin, AlertCircle, Users, Calendar, Clock, CheckCircle, XCircle, TrendingUp, FileText, AlertTriangle, User, Mail, Phone, Plus, Leaf, ShieldAlert, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "./CitizenPortal";
import { format, parseISO } from "date-fns";
import { fr } from 'date-fns/locale';
import { useToast } from "@/components/ui/use-toast";

// Constantes pour les types de signalements
const ISSUE_TYPES = [
  { value: 'delai', label: 'Retard dans l\'exécution' },
  { value: 'qualite', label: 'Problème de qualité' },
  { value: 'corruption', label: 'Suspicion de corruption' },
  { value: 'environnement', label: 'Impact environnemental' },
  { value: 'securite', label: 'Problème de sécurité' },
  { value: 'autre', label: 'Autre problème' },
];

// Interface pour les signalements
interface Report {
  id: string;
  projectId: string;
  title: string;
  description: string;
  type: string;
  status: 'en_attente' | 'en_cours' | 'resolu' | 'rejete';
  createdAt: string;
  updatedAt: string;
  isAnonymous: boolean;
  reporterName?: string;
  reporterEmail?: string;
  reporterPhone?: string;
  evidenceUrl?: string;
}

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [project, setProject] = useState<any>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showReportSuccess, setShowReportSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Simuler un chargement des données du projet
    const fetchProjectData = async () => {
      try {
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Trouver le projet correspondant à l'ID dans l'URL
        const foundProject = projects.find(p => p.id === id);
        
        if (!foundProject) {
          throw new Error('Projet non trouvé');
        }
        
        // Simuler des données de rapport pour ce projet
        const mockReports: Report[] = [
          {
            id: 'r1',
            projectId: id || '',
            title: 'Retard dans les travaux',
            description: 'Les travaux ont pris du retard par rapport au planning initial. Aucune activité n\'a été observée sur le site depuis 3 semaines.',
            type: 'delai',
            status: 'en_cours',
            createdAt: '2023-05-15T10:30:00Z',
            updatedAt: '2023-05-20T14:45:00Z',
            isAnonymous: false,
            reporterName: 'Mamadou Diop',
            reporterEmail: 'mamadou.diop@example.com',
            reporterPhone: '+221 77 123 45 67',
            evidenceUrl: '/placeholder-construction.jpg'
          },
          {
            id: 'r2',
            projectId: id || '',
            title: 'Matériaux de mauvaise qualité',
            description: 'Les matériaux utilisés semblent être de qualité inférieure à ce qui était prévu dans le cahier des charges.',
            type: 'qualite',
            status: 'en_attente',
            createdAt: '2023-06-01T16:20:00Z',
            updatedAt: '2023-06-01T16:20:00Z',
            isAnonymous: true
          },
          {
            id: 'r3',
            projectId: id || '',
            title: 'Problème de sécurité sur le chantier',
            description: 'Absence de signalisation adéquate et de mesures de sécurité pour les piétons à proximité du chantier.',
            type: 'securite',
            status: 'resolu',
            createdAt: '2023-04-10T09:15:00Z',
            updatedAt: '2023-04-20T11:30:00Z',
            isAnonymous: false,
            reporterName: 'Aminata Ndiaye',
            reporterEmail: 'aminata.ndiaye@example.com',
            evidenceUrl: '/placeholder-construction.jpg'
          }
        ];
        
        setProject(foundProject);
        setReports(mockReports);
        
        // Vérifier si l'URL contient un paramètre de succès de signalement
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('reportSubmitted') === 'true') {
          setShowReportSuccess(true);
          // Nettoyer l'URL
          window.history.replaceState({}, document.title, window.location.pathname);
        }
        
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        toast({
          title: 'Erreur',
          description: 'Impossible de charger les détails du projet.',
          variant: 'destructive'
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      fetchProjectData();
    }
  }, [id, toast]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des détails du projet...</p>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Projet non trouvé</h2>
          <p className="text-gray-600 mb-6">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux projets
          </Button>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateStr: string) => {
    return format(parseISO(dateStr), 'PPP', { locale: fr });
  };
  
  const formatDateTime = (dateStr: string) => {
    return format(parseISO(dateStr), "PPpp", { locale: fr });
  };
  
  const handleDownloadReport = () => {
    let reportContent = `Rapport de Projet: ${project.name}\n\n` +
      `Description: ${project.description}\n` +
      `Région: ${project.region}\n` +
      `Secteur: ${project.sector}\n` +
      `Budget: ${project.budget}\n` +
      `Avancement: ${project.progress}%\n` +
      `Date de début: ${project.startDate}\n` +
      `Date de fin prévue: ${project.endDate}\n\n` +
      `Généré le: ${new Date().toLocaleDateString('fr-FR')}\n\n` +
      `Signalements: ${reports.length} signalement(s) enregistré(s)`;
    
    reports.forEach((report, index) => {
      reportContent += `\n\n--- Signalement #${index + 1} ---\n`;
      reportContent += `Titre: ${report.title}\n`;
      reportContent += `Type: ${ISSUE_TYPES.find(t => t.value === report.type)?.label || report.type}\n`;
      reportContent += `Statut: ${formatStatus(report.status)}\n`;
      reportContent += `Date: ${formatDateTime(report.createdAt)}\n`;
      if (!report.isAnonymous) {
        reportContent += `Signalé par: ${report.reporterName}\n`;
      }
      reportContent += `\n${report.description}`;
    });
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rapport-${project.id}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: 'Téléchargement réussi',
      description: 'Le rapport a été téléchargé avec succès.'
    });
  };
  
  const formatStatus = (status: string) => {
    switch (status) {
      case 'en_attente': return 'En attente';
      case 'en_cours': return 'En cours de traitement';
      case 'resolu': return 'Résolu';
      case 'rejete': return 'Rejeté';
      default: return status;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'en_attente': return 'bg-yellow-100 text-yellow-800';
      case 'en_cours': return 'bg-blue-100 text-blue-800';
      case 'resolu': return 'bg-green-100 text-green-800';
      case 'rejete': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getIssueTypeIcon = (type: string) => {
    switch (type) {
      case 'delai': return <Clock className="h-4 w-4 mr-2 text-yellow-500" />;
      case 'qualite': return <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />;
      case 'corruption': return <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />;
      case 'environnement': return <Leaf className="h-4 w-4 mr-2 text-green-500" />;
      case 'securite': return <ShieldAlert className="h-4 w-4 mr-2 text-orange-500" />;
      default: return <AlertCircle className="h-4 w-4 mr-2 text-gray-500" />;
    }
  };
  
  // Images de démonstration du projet (à remplacer par les vraies images du projet)
  const projectImages = [
    '/placeholder-construction.jpg',
    '/placeholder-construction-2.jpg',
    '/placeholder-construction-3.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux projets
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDownloadReport}
            className="flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Télécharger le rapport
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Section Galerie d'images */}
            <Card className="mb-6 overflow-hidden">
              <div className="relative h-96 bg-gray-100">
                {projectImages.length > 0 ? (
                  <>
                    <img 
                      src={projectImages[currentImageIndex]} 
                      alt={`Vue du projet ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {projectImages.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                          aria-label="Image précédente"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
                          aria-label="Image suivante"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {projectImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 w-2 rounded-full transition-all ${
                                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
                              }`}
                              aria-label={`Aller à l'image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <span>Aucune image disponible</span>
                  </div>
                )}
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`${
                          project.status === 'En cours' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          project.status === 'Terminé' ? 'bg-green-50 text-green-700 border-green-200' :
                          'bg-yellow-50 text-yellow-700 border-yellow-200'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.region} • {project.sector}
                      </div>
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.region)}`, '_blank')}
                    className="flex items-center"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Voir sur la carte
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Description du projet</h3>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Détails du projet</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">Date de début:</span>
                          <span className="ml-2">{formatDate(project.startDate)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">Date de fin prévue:</span>
                          <span className="ml-2">{formatDate(project.endDate)}</span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">Avancement:</span>
                          <span className="ml-2">{project.progress}%</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">Bénéficiaires:</span>
                          <span className="ml-2">10,000+ personnes</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold">Budget</h3>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-blue-700">{project.budget}</p>
                        <p className="text-sm text-blue-600">Budget total alloué</p>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dépensé: 65%</span>
                          <span>45 Mds FCFA</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: '65%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Section des signalements */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Signalements</CardTitle>
                    <CardDescription>Liste des signalements pour ce projet</CardDescription>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => navigate(`/report-issue/${id}`)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Nouveau signalement
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {reports.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertCircle className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                    <p>Aucun signalement n'a été effectué pour ce projet.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => navigate(`/report-issue/${id}`)}
                    >
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Signaler un problème
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div key={report.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{report.title}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(report.status)}`}>
                                {formatStatus(report.status)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {getIssueTypeIcon(report.type)}
                              {ISSUE_TYPES.find(t => t.value === report.type)?.label || report.type}
                              <span className="mx-2">•</span>
                              {formatDateTime(report.createdAt)}
                            </p>
                          </div>
                          {report.evidenceUrl && (
                            <Button variant="ghost" size="sm" className="text-primary">
                              <Eye className="h-4 w-4 mr-1" />
                              Voir la preuve
                            </Button>
                          )}
                        </div>
                        <p className="mt-2 text-sm">{report.description}</p>
                        
                        {!report.isAnonymous && (
                          <div className="mt-3 pt-3 border-t text-sm text-muted-foreground">
                            <p className="flex items-center">
                              <User className="h-4 w-4 mr-2" />
                              {report.reporterName}
                            </p>
                            <p className="flex items-center mt-1">
                              <Mail className="h-4 w-4 mr-2" />
                              {report.reporterEmail}
                            </p>
                            {report.reporterPhone && (
                              <p className="flex items-center mt-1">
                                <Phone className="h-4 w-4 mr-2" />
                                {report.reporterPhone}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Résumé</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Statut du projet</p>
                  <div className="mt-1 flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full mr-2 ${
                      project.status === 'En cours' ? 'bg-blue-500' : 
                      project.status === 'Terminé' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="font-medium">{project.status}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Dernière mise à jour</p>
                  <p className="font-medium">{formatDate(new Date().toISOString())}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Responsable</p>
                  <p className="font-medium">Ministère des Infrastructures</p>
                  <p className="text-sm text-muted-foreground">contact@infrastructures.sn</p>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Documents</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Plan du projet
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Rapport d'avancement
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleDownloadReport}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger le rapport complet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Avancement global</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Signalements</span>
                    <span className="font-medium">{reports.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>En attente</span>
                    <span className="text-yellow-600 font-medium">
                      {reports.filter(r => r.status === 'en_attente').length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>En cours de traitement</span>
                    <span className="text-blue-600 font-medium">
                      {reports.filter(r => r.status === 'en_cours').length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Signaler un problème</CardTitle>
                <CardDescription>
                  Vous avez constaté un problème avec ce projet ? Signalez-le nous.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => navigate(`/report-issue/${id}`)}
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Signaler un problème
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Vos signalements restent anonymes si vous le souhaitez.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Modal de confirmation de signalement */}
        {showReportSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-center">Signalement envoyé !</CardTitle>
                <CardDescription className="text-center">
                  Votre signalement a été enregistré avec succès. Nous allons l'examiner dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button 
                  onClick={() => setShowReportSuccess(false)}
                  className="w-full"
                >
                  Fermer
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
