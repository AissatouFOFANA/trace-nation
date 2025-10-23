import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Database, Eye } from "lucide-react";
import heroImage from "@/assets/hero-transparency.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-95" />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">République du Sénégal</span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Plateforme Nationale de{" "}
            <span className="text-accent">Transparence</span> et de{" "}
            <span className="text-accent">Traçabilité Budgétaire</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in max-w-3xl">
            Une solution souveraine pour tracer chaque franc CFA du budget national, 
            lutter contre les malversations financières et restaurer la confiance citoyenne.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">1000Mds</span>
              </div>
              <p className="text-white/80 text-sm">Pertes estimées annuelles</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">100%</span>
              </div>
              <p className="text-white/80 text-sm">Transparence totale</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">Temps réel</span>
              </div>
              <p className="text-white/80 text-sm">Traçabilité instantanée</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link to="/auth">
                Accéder à la Plateforme
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 backdrop-blur-sm bg-white/5"
              asChild
            >
              <Link to="/citizen-portal">Portail Citoyen</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
