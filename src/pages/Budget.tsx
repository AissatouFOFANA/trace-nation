import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const Budget = () => {
  const budgetItems = [
    { id: 1, ministry: "Ministère de l'Éducation Nationale", allocated: "1,200", executed: "810", rate: 67.5 },
    { id: 2, ministry: "Ministère de la Santé et de l'Action Sociale", allocated: "890", executed: "623", rate: 70.0 },
    { id: 3, ministry: "Ministère des Infrastructures", allocated: "1,450", executed: "920", rate: 63.4 },
    { id: 4, ministry: "Ministère de l'Agriculture", allocated: "680", executed: "475", rate: 69.9 },
    { id: 5, ministry: "Ministère de l'Intérieur", allocated: "520", executed: "358", rate: 68.8 },
    { id: 6, ministry: "Ministère de la Justice", allocated: "340", executed: "241", rate: 70.9 },
    { id: 7, ministry: "Ministère des Finances", allocated: "450", executed: "312", rate: 69.3 },
    { id: 8, ministry: "Ministère des Forces Armées", allocated: "780", executed: "542", rate: 69.5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Allocation Budgétaire</h1>
          <p className="text-muted-foreground">Gestion centralisée du budget national 2025</p>
        </div>

        {/* Action Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un ministère ou programme..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="outline" className="flex-1 md:flex-none">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
                <Button variant="outline" className="flex-1 md:flex-none">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button className="flex-1 md:flex-none">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvelle Allocation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Budget Total Voté</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">5,800 Mds FCFA</div>
              <p className="text-sm text-muted-foreground mt-1">Loi de finances 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Budget Exécuté</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">3,905 Mds FCFA</div>
              <p className="text-sm text-muted-foreground mt-1">67.3% du budget total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Solde Disponible</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">1,895 Mds FCFA</div>
              <p className="text-sm text-muted-foreground mt-1">32.7% restant</p>
            </CardContent>
          </Card>
        </div>

        {/* Budget Table */}
        <Card>
          <CardHeader>
            <CardTitle>Répartition par Ministère</CardTitle>
            <CardDescription>Vue détaillée des allocations et taux d'exécution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Ministère</th>
                    <th className="text-right py-3 px-4 font-medium">Budget Alloué</th>
                    <th className="text-right py-3 px-4 font-medium">Budget Exécuté</th>
                    <th className="text-right py-3 px-4 font-medium">Taux</th>
                    <th className="text-center py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetItems.map((item) => (
                    <tr key={item.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{item.ministry}</td>
                      <td className="py-4 px-4 text-right">{item.allocated} Mds FCFA</td>
                      <td className="py-4 px-4 text-right text-success">{item.executed} Mds FCFA</td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <div className="w-20 bg-secondary rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                              style={{ width: `${item.rate}%` }}
                            ></div>
                          </div>
                          <span className="font-medium">{item.rate}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <Button variant="ghost" size="sm">Détails</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Budget;
