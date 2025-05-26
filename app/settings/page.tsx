import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Configuración</h1>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Perfil de la Empresa</CardTitle>
            <CardDescription className="text-gray-400">
              Gestiona la información de tu organización
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu Empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Correo de Contacto
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="contacto@empresa.com"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Notificaciones</CardTitle>
            <CardDescription className="text-gray-400">
              Configura las preferencias de notificaciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Nuevos reportes de bugs",
              "Actualizaciones de proyectos",
              "Nuevos testers registrados",
              "Reportes completados"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2">
                <span className="text-gray-300">{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={idx < 2} />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Integración API</CardTitle>
            <CardDescription className="text-gray-400">
              Configura las credenciales de la API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                API Key
              </label>
              <div className="flex gap-2">
                <input
                  type="password"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="sk_test_123456789"
                  readOnly
                />
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Copiar
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Webhook URL
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://tu-dominio.com/webhook"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  )
} 