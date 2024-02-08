import { notFound } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'en';
export const locales = [defaultLocale, 'ru'] as const;
export type Locale = (typeof locales)[number];

export const getMessages = async (locale: Locale) => {
	try {
		return (await import(`../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
};

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	locales,
});

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`../messages/${locale}.json`)).default,
	timeZone: 'Asia/Yerevan',
}));
