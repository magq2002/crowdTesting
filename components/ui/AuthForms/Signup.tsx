'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import { signUp } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User } from 'lucide-react';

// Define prop type with allowEmail boolean
interface SignUpProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function SignUp({ allowEmail, redirectMethod }: SignUpProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    await handleRequest(e, signUp, router);
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <form
        noValidate={true}
        onSubmit={(e) => handleSubmit(e)}
        className="space-y-4"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-200">
              Nombre completo
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Juan Pérez"
                autoComplete="name"
                required
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-200">
              Email
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                autoComplete="email"
                required
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-200">
              Contraseña
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
                required
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            variant="default"
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              </div>
            ) : (
              'Crear cuenta'
            )}
          </Button>

          <div className="text-center">
            <Link
              href="/signin/password_signin"
              className="text-sm font-medium text-gray-400 hover:text-gray-300"
            >
              ¿Ya tienes una cuenta? <span className="text-blue-500">Inicia sesión</span>
            </Link>
          </div>

          {allowEmail && (
            <div className="text-center">
              <Link
                href="/signin/email_signin"
                className="text-sm font-medium text-gray-400 hover:text-gray-300"
              >
                O inicia sesión con enlace mágico
              </Link>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
