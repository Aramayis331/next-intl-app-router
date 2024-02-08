import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { ROUTE_HOME } from '@/constants/routes';
import { defaultLocale, locales } from '@/i18n';

const middleware = async (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;
	const token = request.cookies.get('token')?.value;

	// auth
	if (pathname.includes('auth') && !!token) {
		return NextResponse.redirect(new URL(ROUTE_HOME, request.url));
	}
	// auth

	const handleI18nRouting = createIntlMiddleware({
		defaultLocale,
		locales,
	});

	return handleI18nRouting(request);
};
export default middleware;

export const config = {
	matcher: ['/((?!_next|.*\\..*).*)'],
};
