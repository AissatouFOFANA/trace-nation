import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Clock, AlertCircle, FileSearch, Users, Database } from "lucide-react";

const Audit = () => {
  const auditStats = [
    { label: "Audits Complétés", value: "847", change: "+12%", icon: CheckCircle, color: "text-success" },
    { label: "Audits en Cours", value: "23", change: "", icon: Clock, color: "text-warning" },
    { label: "Anomalies Détectées", value: "156", change: "-34%", icon: AlertCircle, color: "text-destructive" },
    { label: "Taux de Conformité", value: "94.2%", change: "+2.3%", icon: Shield, color: "text-primary" },
  ];

  const recentAudits = [
    {
      id: "AUD-2025-0089",
      ministry: "Ministère de l'Éducation",
      type: "Audit budgétaire trimestriel",
      auditor: "Cour des Comptes",
      date: "2025-01-15",
      status: "completed",
      findings: 3,
      compliance: 96,
    },
    {
      id: "AUD-2025-0088",
      ministry: "Ministère de la Santé",
      type: "Audit de régularité",
      auditor: "IGE",
      date: "2025-01-12",
      status: "completed",
      findings: 5,
      compliance: 92,
    },
    {
      id: "AUD-2025-0087",
      ministry: "Ministère des Infrastructures",
      type: "Audit des marchés publics",
      auditor: "ARMP",
      date: "2025-01-10",
      status: "in-progress",
      findings: 0,
      compliance: 0,
    },
    {
      id: "AUD-2025-0086",
      ministry: "Ministère de l'Agriculture",
      type: "Audit de performance",
      auditor: "OFNAC",
      date: "2025-01-08",
      status: "completed",
      findings: 2,
      compliance: 95,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success/10 text-success">Complété</Badge>;
      case "in-progress":
        return <Badge className="bg-warning/10 text-warning">En cours</Badge>;
      case "scheduled":
        return <Badge variant="secondary">Planifié</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Contrôle et Audit</h1>
          <p className="text-muted-foreground">Accès facilité pour les organes de contrôle</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {auditStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                    <Icon className={`h-4 w-4 mr-2 ${stat.color}`} />
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  {stat.change && (
                    <p className="text-sm text-muted-foreground">{stat.change} vs mois dernier</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Control Organisms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Organes de Contrôle
            </CardTitle>
            <CardDescription>Accès et permissions par institution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Cour des Comptes",
                  role: "Contrôle de l'exécution budgétaire",
                  access: "Accès total",
                  audits: 234,
                },
                {
                  name: "IGE (Inspection Générale d'État)",
                  role: "Évaluation des politiques publiques",
                  access: "Accès total",
                  audits: 178,
                },
                {
                  name: "ARMP",
                  role: "Régulation des marchés publics",
                  access: "Marchés uniquement",
                  audits: 156,
                },
                {
                  name: "OFNAC",
                  role: "Lutte contre la corruption",
                  access: "Alertes et anomalies",
                  audits: 89,
                },
              ].map((org, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">{org.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{org.role}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Badge variant="secondary">{org.access}</Badge>
                      <span className="text-muted-foreground">{org.audits} audits</span>
                    </div>
                  </div>
                  <Shield className="h-8 w-8 text-primary opacity-30" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Access */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              Accès aux Données
            </CardTitle>
            <CardDescription>Données disponibles en temps réel pour les audits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Transactions", value: "2.4M", status: "Temps réel" },
                { label: "Documents", value: "156K", status: "Archivés" },
                { label: "Justificatifs", value: "89K", status: "Vérifiés" },
              ].map((data, index) => (
                <div key={index} className="text-center p-4 border border-border rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-1">{data.value}</p>
                  <p className="text-sm font-medium mb-1">{data.label}</p>
                  <Badge variant="secondary" className="text-xs">{data.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Audits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileSearch className="h-5 w-5 mr-2 text-primary" />
              Audits Récents
            </CardTitle>
            <CardDescription>Historique des contrôles effectués</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAudits.map((audit) => (
                <div
                  key={audit.id}
                  className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <span className="font-mono text-sm text-muted-foreground">{audit.id}</span>
                      {getStatusBadge(audit.status)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(audit.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h4 className="font-semibold mb-1">{audit.type}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                    <p><span className="font-medium">Ministère:</span> {audit.ministry}</p>
                    <p><span className="font-medium">Auditeur:</span> {audit.auditor}</p>
                  </div>
                  {audit.status === "completed" && (
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm">
                          <span className="font-medium">{audit.findings}</span> anomalies détectées
                        </span>
                        <span className="text-sm">
                          Conformité: <span className="font-bold text-success">{audit.compliance}%</span>
                        </span>
                      </div>
                      <Button variant="outline" size="sm">Voir Rapport</Button>
                    </div>
                  )}
                  {audit.status === "in-progress" && (
                    <div className="pt-3 border-t border-border">
                      <Button variant="outline" size="sm">Suivre l'Audit</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Audit;
