import { Locale } from '@/i18n';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

type Props = {
    params: { locale: Locale }
}


const Contact = async ({ params: { locale } }: Props) => {
    unstable_setRequestLocale(locale);
    const t = await getTranslations({locale, namespace:  'Home'});

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1>{t('title')}</h1>
        </main>
    )
}

export default Contact;