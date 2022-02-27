import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          header: {
            test: 'Test',
            test2: 'Test2'
          },
          favoritesDrawer: {
            title: 'Favorites',
            btnClose: 'Close',
            emptyBody: `Oops, nothing here. Guess it's time to go and favorite something`,
            favoriteLaunches: 'Favorite Launches',
            favoriteLaunchPads: 'Favorite Launch Pads'
          },
          home: {
            browse: {
              launches: 'Browse SpaceX Launches',
              launchPads: 'Browse SpaceX Launch Pads'
            }
          }
        }
      },
      de: {
        translation: {
          header: {
            test: 'Test in German',
            test2: 'Test2 in German'
          },
          favoritesDrawer: {
            title: 'Favorites in German',
            btnClose: 'Close in German',
            emptyBody: `Oops, nothing here. Guess it's time to go and favorite something. in German`,
            favoriteLaunches: 'Favorite Launches in German',
            favoriteLaunchPads: 'Favorite Launch Pads in German'
          },
          home: {
            browse: {
              launches: 'Browse SpaceX Launches in German',
              launchPads: 'Browse SpaceX Launch Pads in German'
            }
          }
        }
      }
    }
  });

export default i18n;
