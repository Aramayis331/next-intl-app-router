import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

import { locales } from 'i18n';
import {ROUTE_CONTACT, ROUTE_HOME} from "@/constants/routes";

export const pathnames: Pathnames<typeof locales> = {
	[ROUTE_HOME]: ROUTE_HOME,
	[ROUTE_CONTACT]: ROUTE_CONTACT,
}

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
	locales,
    pathnames,
});
