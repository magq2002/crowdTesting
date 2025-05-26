import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Tester {
  id: number;
  name: string;
  email: string;
  avatar: string;
  specialties: string[];
  projectsCompleted: number;
  rating: number;
  status: "available" | "testing" | "offline";
}

const testers: Tester[] = [
  {
    id: 1,
    name: "Ana Martínez",
    email: "ana.martinez@example.com",
    avatar: "/avatars/ana.jpg",
    specialties: ["Mobile", "Usability"],
    projectsCompleted: 24,
    rating: 4.8,
    status: "available"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    email: "carlos.ruiz@example.com",
    avatar: "/avatars/carlos.jpg",
    specialties: ["Security", "Performance"],
    projectsCompleted: 18,
    rating: 4.6,
    status: "testing"
  },
  {
    id: 3,
    name: "Laura Sánchez",
    email: "laura.sanchez@example.com",
    avatar: "/avatars/laura.jpg",
    specialties: ["Web", "Accessibility"],
    projectsCompleted: 31,
    rating: 4.9,
    status: "offline"
  }
];

const getStatusColor = (status: Tester['status']) => {
  switch (status) {
    case 'available':
      return 'bg-green-500/10 text-green-500';
    case 'testing':
      return 'bg-blue-500/10 text-blue-500';
    case 'offline':
      return 'bg-gray-500/10 text-gray-500';
  }
};

const getStatusText = (status: Tester['status']) => {
  switch (status) {
    case 'available':
      return 'Disponible';
    case 'testing':
      return 'En Pruebas';
    case 'offline':
      return 'Desconectado';
  }
};

export default function TestersPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Testers</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Invitar Tester
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-800">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-800">
              <TableHead className="text-gray-400">Tester</TableHead>
              <TableHead className="text-gray-400">Especialidades</TableHead>
              <TableHead className="text-gray-400 text-right">Proyectos</TableHead>
              <TableHead className="text-gray-400 text-right">Rating</TableHead>
              <TableHead className="text-gray-400 text-right">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testers.map((tester) => (
              <TableRow key={tester.id} className="border-gray-800 hover:bg-gray-800/50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={tester.avatar} />
                      <AvatarFallback>{tester.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white">{tester.name}</div>
                      <div className="text-sm text-gray-400">{tester.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {tester.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="border-gray-700 text-gray-300">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right text-white">
                  {tester.projectsCompleted}
                </TableCell>
                <TableCell className="text-right">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white ml-1">{tester.rating}</span>
                </TableCell>
                <TableCell className="text-right">
                  <Badge className={getStatusColor(tester.status)}>
                    {getStatusText(tester.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 