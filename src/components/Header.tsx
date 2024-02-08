'use client';

import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import classNames from 'classnames';
import LocaleSwitcher from '@/components/LocalSwitcher';
import { ROUTE_CONTACT, ROUTE_HOME } from '@/constants/routes';
import { Link, usePathname } from '@/i18n';

const Header = () => {
	const t = useTranslations('Header');
	const pathname = usePathname();

	return (
		<div className='bg-slate-800'>
			<nav className='container flex justify-between p-2 text-white mx-auto'>
				<div>
					<Link
						href={ROUTE_HOME}
						className={classNames('inline-block px-2 py-3 transition-colors', {
							'text-white': pathname === ROUTE_HOME,
							'text-gray-400 hover:text-gray-200': pathname !== ROUTE_HOME,
						})}
					>
						{t('home')}
					</Link>
					<Link
						href={ROUTE_CONTACT}
						className={classNames('inline-block px-2 py-3 transition-colors', {
							'text-white': pathname === ROUTE_CONTACT,
							'text-gray-400 hover:text-gray-200': pathname !== ROUTE_CONTACT,
						})}
					>
						{t('about')}
					</Link>
				</div>
				<Suspense fallback={<p>Loading...</p>}>
					<LocaleSwitcher />
				</Suspense>
			</nav>
		</div>
	);
};
export default Header;
