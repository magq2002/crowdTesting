import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ReportMetric {
  label: string;
  value: number;
  change: number;
}

interface ReportCard {
  title: string;
  description: string;
  metrics: ReportMetric[];
}

const reportCards: ReportCard[] = [
  {
    title: "Resumen de Bugs",
    description: "Estadísticas de errores reportados",
    metrics: [
      { label: "Críticos", value: 12, change: -2 },
      { label: "Altos", value: 28, change: 5 },
      { label: "Medios", value: 45, change: -8 },
      { label: "Bajos", value: 67, change: 12 }
    ]
  },
  {
    title: "Rendimiento de Testers",
    description: "Métricas de actividad y calidad",
    metrics: [
      { label: "Activos", value: 24, change: 3 },
      { label: "Reportes/Tester", value: 8.5, change: 1.2 },
      { label: "Tasa Aceptación", value: 92, change: 4 },
    ]
  },
  {
    title: "Estado de Proyectos",
    description: "Progreso general de testing",
    metrics: [
      { label: "En Curso", value: 5, change: 1 },
      { label: "Completados", value: 12, change: 2 },
      { label: "Cobertura", value: 85, change: 5 },
    ]
  }
];

export default function ReportsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Reportes</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
            Descargar PDF
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Generar Reporte
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reportCards.map((card, idx) => (
          <Card key={idx} className="bg-gray-900 border-gray-800 text-white">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {card.metrics.map((metric, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm text-gray-400">{metric.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        {typeof metric.value === 'number' && metric.value % 1 !== 0 
                          ? metric.value.toFixed(1) 
                          : metric.value}
                      </span>
                      <Badge className={metric.change > 0 
                        ? "bg-green-500/10 text-green-500" 
                        : "bg-red-500/10 text-red-500"}>
                        {metric.change > 0 ? '+' : ''}{metric.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Actividad Reciente</h2>
        <div className="space-y-4">
          {[
            { text: "Nuevo reporte crítico en App Móvil E-commerce", time: "Hace 2 horas" },
            { text: "Actualización de estado en Portal Web Bancario", time: "Hace 4 horas" },
            { text: "Reporte de rendimiento completado", time: "Hace 6 horas" },
          ].map((activity, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-300">{activity.text}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 