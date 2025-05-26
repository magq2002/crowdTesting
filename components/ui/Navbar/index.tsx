import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Menu, 
  User, 
  Settings, 
  LogOut,
  Home,
  FolderKanban,
  Users,
  FileBarChart,
  ChevronRight
} from "lucide-react"
import { createClient } from '@/utils/supabase/server'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            {user && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-900 border-r border-gray-800 p-0">
                  <div className="border-b border-gray-800 p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">F</span>
                      </div>
                      <span className="text-xl font-semibold text-white">FuTest</span>
                    </div>
                    <p className="text-sm text-gray-400">Plataforma de Testing Colaborativo</p>
                  </div>
                  
                  <nav className="flex flex-col h-[calc(100vh-8rem)] justify-between">
                    <div className="p-6">
                      <div className="space-y-1">
                        <a href="/" className="flex items-center gap-3 text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors group">
                          <Home className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                          <span className="text-sm font-medium">Inicio</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                        <a href="/projects" className="flex items-center gap-3 text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors group">
                          <FolderKanban className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                          <span className="text-sm font-medium">Proyectos</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                        <a href="/testers" className="flex items-center gap-3 text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors group">
                          <Users className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                          <span className="text-sm font-medium">Testers</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                        <a href="/reports" className="flex items-center gap-3 text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors group">
                          <FileBarChart className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                          <span className="text-sm font-medium">Reportes</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                        <a href="/settings" className="flex items-center gap-3 text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors group">
                          <Settings className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                          <span className="text-sm font-medium">Configuración</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-600 group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-gray-800 p-4">
                      <div className="flex items-center gap-3 px-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
                          <AvatarFallback className="bg-gray-700 text-white">
                            {user.email?.charAt(0).toUpperCase() || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {user.email}
                          </p>
                          <p className="text-xs text-gray-400">
                            Administrador
                          </p>
                        </div>
                        <form action="/auth/signout" method="post">
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400 hover:bg-gray-800">
                            <LogOut className="h-5 w-5" />
                          </Button>
                        </form>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-lg font-bold text-white">F</span>
              </div>
              <span className="text-xl font-semibold text-white">FuTest</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
                      <AvatarFallback className="bg-gray-800 text-white">
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800" align="end">
                  <DropdownMenuLabel className="text-gray-400">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium text-white">{user.email}</p>
                      <p className="text-xs text-gray-500">Administrador</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem className="text-white hover:bg-gray-800 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-gray-800 cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <form action="/auth/signout" method="post">
                    <DropdownMenuItem className="text-red-500 hover:bg-gray-800 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </DropdownMenuItem>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-white hover:bg-gray-800 transition-colors px-4 py-2" 
                  asChild
                >
                  <a href="/signin">Iniciar Sesión</a>
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-4 py-2" 
                  asChild
                >
                  <a href="/signin/signup">Registrarse</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 