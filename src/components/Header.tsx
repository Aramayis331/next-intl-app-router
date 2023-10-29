'use client'

import LocaleSwitcher from "@/components/LocalSwitcher";
import { Suspense } from 'react'
import {Link, usePathname} from "@/i18n";
import {useTranslations} from "next-intl";
import classNames from "classnames";
import {ROUTE_CONTACT, ROUTE_HOME} from "@/constants/routes";

const Header = () => {
    const t = useTranslations('Header');
    const pathname = usePathname();

    return (
        <div className="bg-slate-800">
            <nav className="container flex justify-between p-2 text-white mx-auto">
                <div>
                    <Link href={ROUTE_HOME as any} className={classNames("inline-block px-2 py-3 transition-colors", {
                        "text-white": pathname === ROUTE_HOME,
                        "text-gray-400 hover:text-gray-200": pathname !== ROUTE_HOME
                    })}>{t('home')}</Link>
                    <Link href={ROUTE_CONTACT as any} className={classNames("inline-block px-2 py-3 transition-colors", {
                        "text-white": pathname === ROUTE_CONTACT,
                        "text-gray-400 hover:text-gray-200": pathname !== ROUTE_CONTACT
                    })}>{t('about')}</Link>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                    <LocaleSwitcher/>
                </Suspense>
            </nav>
        </div>
    )
}
export default Header;