import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('Contact');

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1>{t('title')}</h1>
        </main>
    )
}

export default Contact;