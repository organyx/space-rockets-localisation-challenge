import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text, Button } from "@chakra-ui/core";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavoritesProvider from "../store/FavoritesProvider";
import FavoritesDrawer from "./FavoritesDrawer";

import { useTranslation, Trans } from 'react-i18next';

export default function App() {
  return (
    <div>
      <FavoritesProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:launchId" element={<Launch />} />
          <Route path="/launch-pads" element={<LaunchPads />} />
          <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

const languages = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
      <Text>
        <Trans i18nKey="header.test">Try this out</Trans>
      </Text>
      <Text>{t('header.test2')}</Text>
      <div>
        {Object.keys(languages).map(language => (
          <Button
            key={language}
            style={{ fontWeight: i18n.resolvedLanguage === language ? 'bold' : 'normal' }}
            size='sm'
            variant="outline"
            type="submit"
            onClick={() => i18n.changeLanguage(language)}
            st
          >
            {languages[language].nativeName}
          </Button>
        ))}
      </div>
      <FavoritesDrawer/>
    </Flex>
  );
}
