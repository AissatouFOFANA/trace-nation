import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Home, Info, FileText, Globe, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos de TraceNation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme innovante pour la gestion et le suivi des activités administratives et citoyennes.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded-lg inline-block">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Sécurisé et Fiable</h3>
              <p className="text-gray-600">
                Vos données sont protégées avec les dernières technologies de chiffrement pour une sécurité maximale.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg inline-block">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Accessible à Tous</h3>
              <p className="text-gray-600">
                Une interface intuitive conçue pour être utilisée par tous les citoyens, quel que soit leur niveau technique.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-100 p-4 rounded-lg inline-block">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">Connecté</h3>
              <p className="text-gray-600">
                Restez informé en temps réel de l'évolution de vos démarches administratives.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre Mission</h2>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              TraceNation a été créé dans le but de simplifier les démarches administratives et de renforcer la transparence 
              entre les institutions publiques et les citoyens. Notre plateforme permet un suivi en temps réel des dossiers, 
              une communication fluide et une réduction des délais de traitement.
            </p>
            <p>
              Nous croyons en une administration plus efficace et plus proche des citoyens, où chacun peut facilement 
              accéder à ses informations et suivre l'avancement de ses demandes en toute transparence.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Commencez dès maintenant</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="default" className="gap-2">
              <Link to="/citizen-portal">
                <Shield className="h-4 w-4" />
                Accéder au portail citoyen
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
