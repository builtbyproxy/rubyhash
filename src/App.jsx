import React, { useEffect } from 'react';
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import * as ReactGA from "react-ga";

import Layout from './components/Layout';
import DiffForm from './components/DiffForm';

const handleAcceptCookie = () => {
  ReactGA.initialize('G-CWNYFNSFQH');
};

const handleDeclineCookie = () => {
  //remove google analytics cookies
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");
};

const App = () => {
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <Layout title="RubyHash" subtitle="Welcome to RubyHash">
      <DiffForm />
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Layout>
  );
};

export default App;