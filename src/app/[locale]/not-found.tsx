import {useLocale, useTranslations} from "next-intl";
import {unstable_setRequestLocale} from "next-intl/server";
import {Locale} from "@/i18n";

const NotFound = () => {
    const locale = useLocale()
    unstable_setRequestLocale(locale as Locale);
    const t = useTranslations('NotFoundPage');

    return (
        <div className="w-fit mx-auto mt-10">
            {t("title")}
        </div>
    );
}

export default NotFound;
