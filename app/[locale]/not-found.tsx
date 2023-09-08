import {useTranslations} from "next-intl";

const NotFound = () => {
    const t = useTranslations('NotFoundPage');

    return (
        <div className="w-fit mx-auto mt-10">
            {t("title")}
        </div>
    );
}

export default NotFound;
