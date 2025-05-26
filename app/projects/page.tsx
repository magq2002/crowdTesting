import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number;
  name: string;
  description: string;
  status: "active" | "completed" | "pending";
  testersCount: number;
  reportsCount: number;
}

const projects: Project[] = [
  {
    id: 1,
    name: "App Móvil E-commerce",
    description: "Testing de usabilidad y funcionalidad para nueva app de compras",
    status: "active",
    testersCount: 15,
    reportsCount: 45
  },
  {
    id: 2,
    name: "Portal Web Bancario",
    description: "Pruebas de seguridad y rendimiento del nuevo portal",
    status: "pending",
    testersCount: 8,
    reportsCount: 12
  },
  {
    id: 3,
    name: "Sistema de Reservas",
    description: "Testing de integración del motor de reservas",
    status: "completed",
    testersCount: 20,
    reportsCount: 67
  }
];

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'active':
      return 'bg-green-500/10 text-green-500';
    case 'completed':
      return 'bg-blue-500/10 text-blue-500';
    case 'pending':
      return 'bg-yellow-500/10 text-yellow-500';
  }
};

const getStatusText = (status: Project['status']) => {
  switch (status) {
    case 'active':
      return 'Activo';
    case 'completed':
      return 'Completado';
    case 'pending':
      return 'Pendiente';
  }
};

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Proyectos</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Nuevo Proyecto
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-900 border-gray-800 text-white hover:border-gray-700 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <Badge className={getStatusColor(project.status)}>
                  {getStatusText(project.status)}
                </Badge>
              </div>
              <CardDescription className="text-gray-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-gray-400">
                <div>
                  <span className="font-medium text-white">{project.testersCount}</span> testers
                </div>
                <div>
                  <span className="font-medium text-white">{project.reportsCount}</span> reportes
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 