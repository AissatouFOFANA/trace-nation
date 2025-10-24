import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Shield, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation frontend uniquement
    setTimeout(() => {
      setLoading(false);
      if (isLogin) {
        console.log("Tentative de connexion:", { email, password });
        alert("Connexion réussie ! (Frontend uniquement - Backend à implémenter)");
      } else {
        console.log("Tentative d'inscription:", { fullName, email, password });
        alert("Inscription réussie ! (Frontend uniquement - Backend à implémenter)");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[image:var(--gradient-hero)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-8 backdrop-blur-sm bg-background/95">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            {isLogin ? "Connexion" : "Inscription"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Plateforme Nationale de Transparence Budgétaire
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom Complet
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Ex: Ibrahima SENE"
                className="mt-1"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Email Professionnel
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@ministere.gov.sn"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Minimum 8 caractères"
              className="mt-1"
            />
            {!isLogin && (
              <p className="text-xs text-muted-foreground mt-1">
                Minimum 8 caractères avec majuscules, chiffres et symboles
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={loading} size="lg">
            {loading ? (
              <>
                <Lock className="w-4 h-4 mr-2 animate-spin" />
                Chargement...
              </>
            ) : (
              <>
                <Shield className="w-4 h-4 mr-2" />
                {isLogin ? "Se connecter" : "Créer mon compte"}
              </>
            )}
          </Button>

          <div className="space-y-4">
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline font-medium"
              >
                {isLogin
                  ? "Pas encore de compte ? S'inscrire"
                  : "Déjà un compte ? Se connecter"}
              </button>
            </div>

            <div className="text-center pt-4 border-t">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <Lock className="w-3 h-3 inline mr-1" />
            Plateforme sécurisée - Données chiffrées AES-256
            <br />
            Authentification multi-facteurs pour les comptes à privilèges
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
