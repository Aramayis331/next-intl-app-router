'use client';

import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n';
import { locales } from '@/i18n';

export default function LocaleSwitcher() {
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const { replace } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = event.target.value;
		startTransition(() => {
			replace(`${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`, { locale: nextLocale });
		});
	};

	return (
		<label className='relative text-gray-400'>
			<select
				defaultValue={locale}
				disabled={isPending}
				onChange={onSelectChange}
				className='cursor-pointer border rounded outline-none inline-flex appearance-none bg-transparent py-2 pl-2 pr-6'
			>
				{locales.map(cur => (
					<option key={cur} value={cur}>
						{cur}
					</option>
				))}
			</select>
			<span className='pointer-events-none absolute top-[8px] right-2'>⌄</span>
		</label>
	);
}
