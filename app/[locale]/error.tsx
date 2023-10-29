'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useEffect} from "react";
import {unstable_setRequestLocale} from "next-intl/server";

type Props = {
    error: Error;
    reset(): void;
};

const Error = ({error, reset}: Props) => {
    const t = useTranslations('Error');
    const locale = useLocale()

    useEffect(() => {
        console.error(error);
    }, [error]);

    unstable_setRequestLocale(locale);

    return (
        <div className="w-fit mx-auto mt-10">
            <h1>{t('title')}</h1>
            <button onClick={reset}>{t('retry')}</button>
        </div>
    );
}
export default Error;