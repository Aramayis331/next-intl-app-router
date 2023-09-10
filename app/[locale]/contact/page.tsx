import { Locale } from 'i18n';
import { getTranslator } from 'next-intl/server';

type Props = {
    params: { locale: Locale }
}


const Contact = async ({ params: { locale } }: Props) => {
    const t = await getTranslator(locale, 'Home');

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1>{t('title')}</h1>
        </main>
    )
}

export default Contact;