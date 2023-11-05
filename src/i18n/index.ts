import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";
import {createSharedPathnamesNavigation} from "next-intl/navigation";

export const defaultLocale = 'en'
export const locales = [defaultLocale, 'ru'] as const
export type Locale = (typeof locales)[number]

export const getMessages = async (locale: Locale) => {
    try {
        return (await import(`src/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
    locales
});

export default getRequestConfig(async ({locale}) => ({
    messages: (await import(`src/messages/${locale}.json`)).default
}));