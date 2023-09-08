import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";

export const defaultLocale = 'en'
export const locales = [defaultLocale, 'ru'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({locale}) => ({
    messages: (await import(`messages/${locale}.json`)).default
}));

export async function getMessages(locale: string) {
    try {
        return (await import(`messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}