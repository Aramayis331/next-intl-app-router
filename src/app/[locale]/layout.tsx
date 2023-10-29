import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, Locale, locales} from "@/i18n";
import { ReactNode } from "react";
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Intl App Router',
  description: 'Generated by create next app',
}

export function generateStaticParams() {
  return locales.map((locale => ({locale})))
}

type Props = {
  children: ReactNode,
  params: {locale: Locale}
}

const RootLayout = async ({
  children, params: {locale}
}: Props) => {
  const messages = await getMessages(locale)

  if (!locales.includes(locale as Locale)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider timeZone='Asia/Yerevan' locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
export default RootLayout