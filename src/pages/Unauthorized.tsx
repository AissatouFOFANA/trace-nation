import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <ShieldAlert className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Accès refusé</h1>
        <p className="text-gray-600">
          Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
          Veuillez contacter un administrateur si vous pensez qu'il s'agit d'une erreur.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link to="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
