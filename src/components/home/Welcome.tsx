import React from 'react';
import {useTranslation} from "react-i18next";

const Welcome = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-4xl text-blue-700 font-bold mb-6">{t('welcomeMessage')}</h1>
            <p className="text-lg mb-4">{t('introText')}</p>
            <p className="text-lg mb-4">{t('exploreText')}</p>
        </>
    );
};

export default Welcome;