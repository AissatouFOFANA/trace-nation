import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Tableau de Bord", path: "/dashboard" },
    { name: "Budget", path: "/budget" },
    { name: "Paiements", path: "/payments" },
    { name: "Détection de Fraude", path: "/fraud-detection" },
    { name: "Portail Citoyen", path: "/citizen-portal" },
    { name: "Rapports", path: "/reports" },
    { name: "Audit", path: "/audit" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">NT</span>
            </div>
            <span className="font-display font-bold text-xl">Transparence Sénégal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="text-sm">
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button className="ml-4">Connexion</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button className="w-full mt-4">Connexion</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
