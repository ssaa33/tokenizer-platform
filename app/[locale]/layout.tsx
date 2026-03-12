import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Web3Provider } from './providers/Web3Provider';
import './globals.css';  // ← ¡AGREGAR ESTO!

const locales = ['es', 'en', 'pt'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Validar que el locale sea soportado
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  try {
    const messages = await getMessages();

    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Web3Provider>
              {children}
            </Web3Provider>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error('Error loading messages:', error);
    notFound();
  }
}