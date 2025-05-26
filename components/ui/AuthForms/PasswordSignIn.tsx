'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signInWithPassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';

// Define prop type with allowEmail boolean
interface PasswordSignInProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function PasswordSignIn({
  allowEmail,
  redirectMethod
}: PasswordSignInProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    await handleRequest(e, signInWithPassword, router);
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
                autoComplete="current-password"
                required
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-700 bg-gray-800/50 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
              Recordarme
            </label>
          </div>
          <Link
            href="/signin/forgot_password"
            className="text-sm font-medium text-blue-500 hover:text-blue-400"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

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
            'Iniciar Sesión'
          )}
        </Button>
      </form>

      {allowEmail && (
        <div className="text-center">
          <Link
            href="/signin/email_signin"
            className="text-sm font-medium text-gray-400 hover:text-gray-300"
          >
            Iniciar sesión con enlace mágico
          </Link>
        </div>
      )}

      <div className="text-center">
        <Link
          href="/signin/signup"
          className="text-sm font-medium text-gray-400 hover:text-gray-300"
        >
          ¿No tienes una cuenta? <span className="text-blue-500">Regístrate</span>
        </Link>
      </div>
    </div>
  );
}
