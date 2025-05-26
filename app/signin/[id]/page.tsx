import Logo from '@/components/icons/Logo';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getAuthTypes,
  getViewTypes,
  getDefaultSignInView,
  getRedirectMethod
} from '@/utils/auth-helpers/settings';
import Card from '@/components/ui/Card';
import PasswordSignIn from '@/components/ui/AuthForms/PasswordSignIn';
import EmailSignIn from '@/components/ui/AuthForms/EmailSignIn';
import Separator from '@/components/ui/AuthForms/Separator';
import OauthSignIn from '@/components/ui/AuthForms/OauthSignIn';
import ForgotPassword from '@/components/ui/AuthForms/ForgotPassword';
import UpdatePassword from '@/components/ui/AuthForms/UpdatePassword';
import SignUp from '@/components/ui/AuthForms/Signup';

export default async function SignIn({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: { disable_button: boolean };
}) {
  const { allowOauth, allowEmail, allowPassword } = getAuthTypes();
  const viewTypes = getViewTypes();
  const redirectMethod = getRedirectMethod();

  let viewProp: string;

  if (typeof params.id === 'string' && viewTypes.includes(params.id)) {
    viewProp = params.id;
  } else {
    const preferredSignInView = cookies().get('preferredSignInView')?.value || null;
    viewProp = getDefaultSignInView(preferredSignInView);
    return redirect(`/signin/${viewProp}`);
  }

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user && viewProp !== 'update_password') {
    return redirect('/');
  } else if (!user && viewProp === 'update_password') {
    return redirect('/signin');
  }

  const titles = {
    password_signin: 'Bienvenido de nuevo',
    email_signin: 'Iniciar sesión con email',
    forgot_password: 'Recuperar contraseña',
    update_password: 'Actualizar contraseña',
    signup: 'Crear una cuenta'
  };

  const descriptions = {
    password_signin: 'Ingresa tus credenciales para continuar',
    email_signin: 'Te enviaremos un enlace mágico a tu correo',
    forgot_password: 'Te enviaremos instrucciones para recuperar tu contraseña',
    update_password: 'Ingresa tu nueva contraseña',
    signup: 'Únete a nuestra plataforma de testing colaborativo'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">F</span>
          </div>
        </div>

        <Card
          title={titles[viewProp as keyof typeof titles]}
          description={descriptions[viewProp as keyof typeof descriptions]}
        >
          {viewProp === 'password_signin' && (
            <PasswordSignIn
              allowEmail={allowEmail}
              redirectMethod={redirectMethod}
            />
          )}
          {viewProp === 'email_signin' && (
            <EmailSignIn
              allowPassword={allowPassword}
              redirectMethod={redirectMethod}
              disableButton={searchParams.disable_button}
            />
          )}
          {viewProp === 'forgot_password' && (
            <ForgotPassword
              allowEmail={allowEmail}
              redirectMethod={redirectMethod}
              disableButton={searchParams.disable_button}
            />
          )}
          {viewProp === 'update_password' && (
            <UpdatePassword redirectMethod={redirectMethod} />
          )}
          {viewProp === 'signup' && (
            <SignUp allowEmail={allowEmail} redirectMethod={redirectMethod} />
          )}
          {viewProp !== 'update_password' &&
            viewProp !== 'signup' &&
            allowOauth && (
              <>
                <Separator text="O continúa con" />
                <OauthSignIn />
              </>
            )}
        </Card>
      </div>
    </div>
  );
}
