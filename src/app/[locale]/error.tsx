'use client';

import { useTranslations} from 'next-intl';
import {useEffect} from "react";

type Props = {
    error: Error;
    reset(): void;
};

const Error = ({error, reset}: Props) => {
    const t = useTranslations('Error');

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="w-fit mx-auto mt-10">
            <h1>{t('title')}</h1>
            <button onClick={reset}>{t('retry')}</button>
        </div>
    );
}
export default Error;