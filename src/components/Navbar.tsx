import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, DollarSign, CreditCard, AlertTriangle, Users, FileText, CheckCircle, LogOut, UserCog, Upload } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, role, user } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur la plateforme NDT",
    });
    navigate('/');
  };

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Budget", path: "/budget", icon: DollarSign },
    { name: "Paiements", path: "/payments", icon: CreditCard },
    { name: "Fraude", path: "/fraud-detection", icon: AlertTriangle },
    { name: "Portail Citoyen", path: "/citizen-portal", icon: Users },
    { name: "Rapports", path: "/reports", icon: FileText },
    { name: "Audit", path: "/audit", icon: CheckCircle },
  ];

  const adminLinks = [
    { name: "Gestion Utilisateurs", path: "/user-management", icon: UserCog },
  ];

  const administrationLinks = [
    { name: "Saisie Données", path: "/data-entry", icon: Upload },
  ];

  return (
    <header className="border-b bg-card sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-xl">NDT Platform</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
          
          {role === 'admin' && adminLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
          
          {(role === 'administration' || role === 'admin') && administrationLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        {user && (
          <Button onClick={handleLogout} variant="outline" size="sm" className="gap-2">
            <LogOut className="h-4 w-4" />
            Déconnexion
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
