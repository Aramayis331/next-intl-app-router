import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';

type Props = {
	params: { locale: Locale };
};

const Home = async ({ params: { locale } }: Props) => {
	unstable_setRequestLocale(locale);
	const t = await getTranslations({ locale, namespace: 'Home' });

	return (
		<main className='flex flex-col items-center justify-between p-24'>
			<h1>{t('title')}</h1>
			<p className='max-w-[590px] mt-5 text-center'>{t('description')}</p>
		</main>
	);
};

export default Home;
