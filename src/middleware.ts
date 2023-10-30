import createIntlMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {defaultLocale, locales} from "@/i18n";

const middleware = async (request: NextRequest) => {
    const handleI18nRouting = createIntlMiddleware({
        defaultLocale,
        locales
    });

    const response = handleI18nRouting(request);

    return response;
}
export default middleware;

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
};