import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 border-t border-gray-800">
      <div className="max-w-[2000px] mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">F</span>
            </div>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} FuTest
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="/support" className="hover:text-gray-400 transition-colors">
              Soporte
            </a>
            <a href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacidad
            </a>
            <a href="/terms" className="hover:text-gray-400 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 