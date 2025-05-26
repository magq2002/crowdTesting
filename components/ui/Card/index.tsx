import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  description?: string;
  footer?: React.ReactNode;
}

export default function Card({ title, description, children, footer }: Props) {
  return (
    <div className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
      <div className="px-8 pt-8">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">{title}</h2>
        {description && (
          <p className="text-gray-400 text-sm text-center mb-6">{description}</p>
        )}
      </div>
      <div className="p-8">
        {children}
      </div>
      {footer && (
        <div className="px-8 py-6 bg-gray-900/50 border-t border-gray-800">
          {footer}
        </div>
      )}
    </div>
  );
} 