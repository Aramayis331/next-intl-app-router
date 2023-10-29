import {getRequestConfig} from 'next-intl/server';
import {notFound} from "next/navigation";
import {createLocalizedPathnamesNavigation, Pathnames} from "next-intl/navigation";
import {ROUTE_CONTACT, ROUTE_HOME} from "@/src/constants/routes";

export const defaultLocale = 'en'
export const locales = [defaultLocale, 'ru'] as const
export type Locale = (typeof locales)[number]

export const pathnames: Pathnames<typeof locales> = {
    [ROUTE_HOME]: ROUTE_HOME,
    [ROUTE_CONTACT]: ROUTE_CONTACT,
}

export const getMessages = async (locale: Locale) => {
    try {
        return (await import(`src/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
    locales,
    pathnames,
});

export default getRequestConfig(async ({locale}) => ({
    messages: (await import(`src/messages/${locale}.json`)).default
}));