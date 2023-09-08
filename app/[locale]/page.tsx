import {useTranslations} from 'next-intl';

const Home = () => {
    const t = useTranslations('Home');

  return (
    <main className="flex flex-col items-center justify-between p-24">
        <h1>{t('title')}</h1>
        <p className="max-w-[590px] mt-5 text-center">{t('description')}</p>
    </main>
  )
}

export default Home;