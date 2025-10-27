import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, XCircle, ArrowLeft, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { projects } from "./CitizenPortal";
import { FileText } from "lucide-react";

const ISSUE_TYPES = [
  { value: "delai", label: "Retard dans l'exécution" },
  { value: "qualite", label: "Problème de qualité" },
  { value: "corruption", label: "Suspicion de corruption" },
  { value: "environnement", label: "Impact environnemental" },
  { value: "securite", label: "Problème de sécurité" },
  { value: "autre", label: "Autre problème" },
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  issueType: string;
  title: string;
  description: string;
  evidence: File | null;
  isAnonymous: boolean;
};

export default function ReportIssue() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    issueType: "",
    title: "",
    description: "",
    evidence: null,
    isAnonymous: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Rediriger si le projet n'existe pas
        navigate('/citizen-portal');
      }
    }
  }, [id, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        evidence: e.target.files ? e.target.files[0] : null
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En production, vous enverriez les données à votre API ici
      // const response = await fetch('/api/report-issue', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     projectId: id,
      //     ...formData,
      //     evidence: formData.evidence ? await toBase64(formData.evidence) : null
      //   })
      // });
      // const data = await response.json();
      
      setIsSuccess(true);
      
      toast({
        title: "Signalement envoyé",
        description: "Votre signalement a bien été enregistré. Nous allons l'étudier dans les plus brefs délais.",
      });
      
      // Réinitialiser le formulaire après un certain délai
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          issueType: "",
          title: "",
          description: "",
          evidence: null,
          isAnonymous: false,
        });
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 3000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre signalement. Veuillez réessayer.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Chargement du projet...</p>
        </div>
      </div>
    );
  }
  
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle>Signalement envoyé avec succès</CardTitle>
            <CardDescription className="pt-2">
              Nous avons bien reçu votre signalement concernant le projet <strong>{project.name}</strong>.
              Notre équipe va l'étudier dans les plus brefs délais.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button onClick={() => navigate(`/project/${project.id}`)}>
              Retour au projet
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Signaler un problème</h1>
            <p className="mt-2 text-gray-600">
              Aidez-nous à améliorer la transparence en signalant tout problème concernant le projet <strong>{project.name}</strong>.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Formulaire de signalement</CardTitle>
              <CardDescription>
                Tous les champs marqués d'un astérisque (*) sont obligatoires.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-700" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Les informations que vous fournissez resteront confidentielles. En cas de signalement de corruption ou de détournement, 
                        veuillez fournir des éléments concrets pour faciliter le traitement de votre dossier.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Nom complet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={formData.isAnonymous}
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formData.isAnonymous}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={formData.isAnonymous}
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="issueType">
                      Type de problème <span className="text-red-500">*</span>
                    </Label>
                    <Select 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, issueType: value }))}
                      value={formData.issueType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un type de problème" />
                      </SelectTrigger>
                      <SelectContent>
                        {ISSUE_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Titre du signalement <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement le problème"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description détaillée <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Décrivez le problème de manière détaillée, en indiquant si possible la date, l'heure et le lieu des faits."
                    className="min-h-[120px]"
                  />
                  <p className="text-sm text-gray-500">
                    Soyez aussi précis que possible dans votre description. Plus vous fournirez de détails, plus il nous sera facile de traiter votre signalement.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="evidence">
                    Preuves (facultatif)
                  </Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Télécharger un fichier</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          />
                        </label>
                        <p className="pl-1">ou glissez-déposez</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        JPG, PNG, PDF, DOC jusqu'à 10MB
                      </p>
                      {formData.evidence && (
                        <p className="text-sm text-green-600 mt-2">
                          Fichier sélectionné : {formData.evidence.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isAnonymous"
                      name="isAnonymous"
                      type="checkbox"
                      checked={formData.isAnonymous}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        isAnonymous: e.target.checked,
                        fullName: e.target.checked ? 'Anonyme' : '',
                        email: e.target.checked ? 'anonyme@example.com' : '',
                        phone: e.target.checked ? '' : formData.phone
                      }))}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="isAnonymous" className="font-medium text-gray-700">
                      Rendre ce signalement anonyme
                    </label>
                    <p className="text-gray-500">
                      Votre identité ne sera pas enregistrée avec ce signalement.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        En soumettant ce formulaire, vous acceptez que votre signalement soit traité conformément à notre politique de confidentialité. 
                        Nous nous engageons à protéger vos données personnelles et à garantir la confidentialité de votre signalement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                  disabled={isSubmitting}
                >
                  Annuler
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Envoyer le signalement
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">À propos du traitement des signalements</h3>
            <p className="text-sm text-gray-600 mb-3">
              Chaque signalement est examiné par notre équipe dans les plus brefs délais. Nous nous engageons à traiter chaque cas avec la plus grande attention et dans le respect de la confidentialité.
            </p>
            <p className="text-sm text-gray-600">
              Pour toute question concernant le traitement de votre signalement, vous pouvez nous contacter à l'adresse <a href="mailto:signalements@gouv.sn" className="text-blue-600 hover:underline">signalements@gouv.sn</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
