import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type WebsiteLanguage = "en" | "si" | "ta";

export const WEBSITE_LANGUAGE_NAMES: Record<WebsiteLanguage, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};

const en = {
  homeTitle: "Vehicle Wallet — Your vehicle essentials, in one place",
  privacyPageTitle: "Privacy overview — Vehicle Wallet",
  metaDescription:
    "Keep vehicle details, documents and Fuel Pass QR codes together on your phone. Vehicle Wallet is made for Sri Lankan drivers and works offline.",
  navHome: "Home",
  navFeatures: "Features",
  navPrivacy: "Privacy",
  languageLabel: "Choose language",
  openMenu: "Open navigation menu",
  closeMenu: "Close navigation menu",
  brandTagline: "For Sri Lankan drivers",
  heroEyebrow: "Made for Sri Lankan drivers",
  heroTitle: "Your vehicle essentials, all in one place.",
  heroDescription:
    "Keep vehicle details, documents and Fuel Pass QR codes on your phone. Access them offline when you need them.",
  playStoreLead: "Get it on",
  appStoreLead: "Download on the",
  heroFeaturesLink: "Explore features",
  heroPrivacyLink: "Your privacy",
  featuresTitle: "A simpler way to manage your vehicle",
  featuresIntro: "The essentials, without the extra clutter.",
  vehiclesTitle: "Vehicle profiles",
  vehiclesBody:
    "Keep details for your car, motorcycle, three-wheeler or van together.",
  documentsTitle: "Vehicle documents",
  documentsBody:
    "Save insurance, revenue licence, emission and other vehicle documents on your phone.",
  fuelTitle: "Fuel Pass QR",
  fuelBody: "Keep your Fuel Pass QR ready for quick access.",
  remindersTitle: "Expiry reminders",
  remindersBody: "Get local reminders before your documents expire.",
  privacyPreviewTitle: "Your wallet stays on your device.",
  privacyPreviewBody:
    "Your vehicle details, documents and Fuel Pass QR are stored locally. Use core wallet features offline, with no account required.",
  privacyPreviewAction: "Read the privacy overview",
  footerSummary:
    "A simple, offline-first wallet for vehicle details, documents and Fuel Pass QR codes.",
  footerDesigned: "Made for Sri Lankan drivers",
  footerCopyright: "All rights reserved.",
  privacyBack: "Back to home",
  privacyEyebrow: "Privacy overview",
  privacyTitle: "Your data, on your device.",
  privacyIntro:
    "Vehicle Wallet is designed to keep your vehicle information close at hand without an online wallet account.",
  privacyStorageTitle: "Stored on your phone",
  privacyStorageBody:
    "Vehicle details, document records and Fuel Pass QR codes are saved in the app on your device. They are not uploaded to an online wallet account.",
  privacyOfflineTitle: "Works offline",
  privacyOfflineBody:
    "You can access your saved wallet information without an internet connection.",
  privacySecurityTitle: "Choose your app lock",
  privacySecurityBody:
    "Settings let you enable a PIN or biometric unlock, when supported by your device.",
  privacyControlTitle: "You stay in control",
  privacyControlBody:
    "You can remove saved vehicles, documents and QR codes in the app. Uninstalling the app removes its local wallet data.",
} as const;

type WebsiteCopyKey = keyof typeof en;

const si: Record<WebsiteCopyKey, string> = {
  homeTitle: "වාහන පසුම්බිය — ඔබේ වාහනයට අවශ්‍ය සියල්ල එකම තැනක",
  privacyPageTitle: "පෞද්ගලිකත්වය — වාහන පසුම්බිය",
  metaDescription:
    "වාහන විස්තර, ලේඛන සහ ඉන්ධන QR කේත ඔබගේ දුරකථනයේම තබාගන්න. ශ්‍රී ලාංකික රියදුරන් සඳහා නිර්මාණය කර ඇති අතර නොබැඳිවද ක්‍රියා කරයි.",
  navHome: "මුල් පිටුව",
  navFeatures: "විශේෂාංග",
  navPrivacy: "පෞද්ගලිකත්වය",
  languageLabel: "භාෂාව තෝරන්න",
  openMenu: "සංචාලන මෙනුව විවෘත කරන්න",
  closeMenu: "සංචාලන මෙනුව වසන්න",
  brandTagline: "ශ්‍රී ලාංකික රියදුරන් සඳහා",
  heroEyebrow: "ශ්‍රී ලාංකික රියදුරන් සඳහා",
  heroTitle: "ඔබේ වාහනයට අවශ්‍ය සියල්ල, එකම තැනක.",
  heroDescription:
    "වාහන විස්තර, ලේඛන සහ ඉන්ධන QR කේත ඔබගේ දුරකථනයේ සුරකින්න. අවශ්‍ය විට අන්තර්ජාලය නොමැතිවද භාවිතා කරන්න.",
  playStoreLead: "Google Play වෙතින්",
  appStoreLead: "App Store වෙතින් බාගන්න",
  heroFeaturesLink: "විශේෂාංග බලන්න",
  heroPrivacyLink: "ඔබේ පෞද්ගලිකත්වය",
  featuresTitle: "ඔබේ වාහනය කළමනාකරණය කිරීම දැන් පහසුයි",
  featuresIntro: "අවශ්‍ය දේ පමණක්, අනවශ්‍ය දේ නැතිව.",
  vehiclesTitle: "වාහන පැතිකඩ",
  vehiclesBody:
    "ඔබේ කාර්, යතුරුපැදි, ත්‍රිරෝද රථ හෝ වෑන්වල විස්තර එකම තැනක තබාගන්න.",
  documentsTitle: "වාහන ලේඛන",
  documentsBody:
    "රක්ෂණ, ආදායම් බලපත්‍ර, විමෝචන සහ වෙනත් වාහන ලේඛන දුරකථනයේ සුරකින්න.",
  fuelTitle: "ඉන්ධන QR",
  fuelBody: "ඉක්මනින් භාවිතා කිරීමට ඉන්ධන QR කේතය සූදානමින් තබාගන්න.",
  remindersTitle: "කල් ඉකුත්වීමේ මතක් කිරීම්",
  remindersBody: "ලේඛන කල් ඉකුත් වීමට පෙර මතක් කිරීම් ලබාගන්න.",
  privacyPreviewTitle: "ඔබේ දත්ත ඔබේ උපාංගයේම පවතී.",
  privacyPreviewBody:
    "ඔබේ වාහන විස්තර, ලේඛන සහ ඉන්ධන QR ඔබගේ උපාංගයේ සුරැකේ. ගිණුමක් නොමැතිව, නොබැඳිව ප්‍රධාන විශේෂාංග භාවිතා කරන්න.",
  privacyPreviewAction: "පෞද්ගලිකත්වය ගැන කියවන්න",
  footerSummary:
    "වාහන විස්තර, ලේඛන සහ ඉන්ධන QR සඳහා සරල, නොබැඳි පසුම්බියක්.",
  footerDesigned: "ශ්‍රී ලාංකික රියදුරන් සඳහා",
  footerCopyright: "සියලුම හිමිකම් ඇවිරිණි.",
  privacyBack: "මුල් පිටුවට",
  privacyEyebrow: "පෞද්ගලිකත්වය පිළිබඳ තොරතුරු",
  privacyTitle: "ඔබේ දත්ත, ඔබේ උපාංගයේ.",
  privacyIntro:
    "අන්තර්ජාල ගිණුමක් නොමැතිව ඔබේ වාහන තොරතුරු ළඟ තබාගැනීමට වාහන පසුම්බිය නිර්මාණය කර ඇත.",
  privacyStorageTitle: "ඔබගේ දුරකථනයේ සුරැකේ",
  privacyStorageBody:
    "වාහන විස්තර, ලේඛන තොරතුරු සහ ඉන්ධන QR කේත යෙදුම තුළ ඔබගේ උපාංගයේ සුරැකේ. ඒවා අන්තර්ජාල පසුම්බි ගිණුමකට උඩුගත නොවේ.",
  privacyOfflineTitle: "නොබැඳිව ක්‍රියා කරයි",
  privacyOfflineBody:
    "අන්තර්ජාල සම්බන්ධතාවයක් නොමැතිවද සුරැකි තොරතුරු වෙත පිවිසිය හැක.",
  privacySecurityTitle: "යෙදුම් අගුල තෝරන්න",
  privacySecurityBody:
    "ඔබගේ උපාංගය සහාය දක්වන්නේ නම්, සැකසීම් තුළ PIN හෝ ජෛවමිතික අගුළු හැරීම සක්‍රීය කළ හැක.",
  privacyControlTitle: "පාලනය ඔබ සතුවයි",
  privacyControlBody:
    "යෙදුම තුළ සුරැකි වාහන, ලේඛන සහ QR කේත මකා දැමිය හැක. යෙදුම ඉවත් කළ විට එහි දේශීය දත්තද ඉවත් වේ.",
};

const ta: Record<WebsiteCopyKey, string> = {
  homeTitle: "வாகன Wallet — உங்கள் வாகனத் தேவைகள் அனைத்தும் ஒரே இடத்தில்",
  privacyPageTitle: "தனியுரிமை — வாகன Wallet",
  metaDescription:
    "வாகன விவரங்கள், ஆவணங்கள் மற்றும் எரிபொருள் QR குறியீடுகளை உங்கள் தொலைபேசியில் வைத்திருங்கள். இலங்கை சாரதிகளுக்காக உருவாக்கப்பட்டது; இணையமின்றியும் இயங்கும்.",
  navHome: "முகப்பு",
  navFeatures: "அம்சங்கள்",
  navPrivacy: "தனியுரிமை",
  languageLabel: "மொழியைத் தேர்ந்தெடுக்கவும்",
  openMenu: "வழிசெலுத்தல் பட்டியைத் திறக்கவும்",
  closeMenu: "வழிசெலுத்தல் பட்டியை மூடவும்",
  brandTagline: "இலங்கை சாரதிகளுக்காக",
  heroEyebrow: "இலங்கை சாரதிகளுக்காக",
  heroTitle: "உங்கள் வாகனத் தேவைகள் அனைத்தும் ஒரே இடத்தில்.",
  heroDescription:
    "வாகன விவரங்கள், ஆவணங்கள் மற்றும் எரிபொருள் QR குறியீடுகளை உங்கள் தொலைபேசியில் சேமியுங்கள். தேவைப்படும்போது இணையமின்றியும் அணுகலாம்.",
  playStoreLead: "Google Play-இல்",
  appStoreLead: "App Store-இல் பதிவிறக்கவும்",
  heroFeaturesLink: "அம்சங்களைப் பாருங்கள்",
  heroPrivacyLink: "உங்கள் தனியுரிமை",
  featuresTitle: "உங்கள் வாகனத்தை நிர்வகிப்பது இப்போது எளிது",
  featuresIntro: "தேவையானவை மட்டும், தேவையற்றவை இன்றி.",
  vehiclesTitle: "வாகன விவரங்கள்",
  vehiclesBody:
    "கார், மோட்டார் சைக்கிள், முச்சக்கர வண்டி அல்லது வேன் விவரங்களை ஒரே இடத்தில் வைத்திருங்கள்.",
  documentsTitle: "வாகன ஆவணங்கள்",
  documentsBody:
    "காப்பீடு, வருமான உரிமம், உமிழ்வு மற்றும் பிற வாகன ஆவணங்களை உங்கள் தொலைபேசியில் சேமியுங்கள்.",
  fuelTitle: "எரிபொருள் QR",
  fuelBody: "விரைவாக அணுக உங்கள் எரிபொருள் QR குறியீட்டைத் தயாராக வைத்திருங்கள்.",
  remindersTitle: "காலாவதி நினைவூட்டல்கள்",
  remindersBody:
    "ஆவணங்கள் காலாவதியாகும் முன் உள்ளூர் நினைவூட்டல்களைப் பெறுங்கள்.",
  privacyPreviewTitle: "உங்கள் Wallet உங்கள் சாதனத்திலேயே இருக்கும்.",
  privacyPreviewBody:
    "உங்கள் வாகன விவரங்கள், ஆவணங்கள் மற்றும் எரிபொருள் QR சாதனத்தில் சேமிக்கப்படும். கணக்கு இல்லாமல் முக்கிய அம்சங்களை இணையமின்றிப் பயன்படுத்துங்கள்.",
  privacyPreviewAction: "தனியுரிமை விவரங்களைப் படியுங்கள்",
  footerSummary:
    "வாகன விவரங்கள், ஆவணங்கள் மற்றும் எரிபொருள் QR குறியீடுகளுக்கான எளிய, இணையமற்ற Wallet.",
  footerDesigned: "இலங்கை சாரதிகளுக்காக",
  footerCopyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  privacyBack: "முகப்புக்குத் திரும்பு",
  privacyEyebrow: "தனியுரிமை விவரங்கள்",
  privacyTitle: "உங்கள் தரவு, உங்கள் சாதனத்தில்.",
  privacyIntro:
    "ஆன்லைன் Wallet கணக்கு இல்லாமல் உங்கள் வாகனத் தகவல்களை அருகில் வைத்திருக்க வாகன Wallet வடிவமைக்கப்பட்டுள்ளது.",
  privacyStorageTitle: "உங்கள் தொலைபேசியில் சேமிக்கப்படும்",
  privacyStorageBody:
    "வாகன விவரங்கள், ஆவணப் பதிவுகள் மற்றும் எரிபொருள் QR குறியீடுகள் உங்கள் சாதனத்தில் உள்ள செயலியில் சேமிக்கப்படும். அவை ஆன்லைன் Wallet கணக்கில் பதிவேற்றப்படாது.",
  privacyOfflineTitle: "இணையமின்றியும் இயங்கும்",
  privacyOfflineBody:
    "இணைய இணைப்பு இல்லாமலும் சேமித்த Wallet தகவல்களை அணுகலாம்.",
  privacySecurityTitle: "செயலி பூட்டைத் தேர்வுசெய்யுங்கள்",
  privacySecurityBody:
    "உங்கள் சாதனம் ஆதரித்தால், அமைப்புகளில் PIN அல்லது பயோமெட்ரிக் திறப்பை இயக்கலாம்.",
  privacyControlTitle: "கட்டுப்பாடு உங்களிடம்",
  privacyControlBody:
    "செயலியில் சேமித்த வாகனங்கள், ஆவணங்கள் மற்றும் QR குறியீடுகளை நீக்கலாம். செயலியை நிறுவல் நீக்கினால் அதன் உள்ளக Wallet தரவும் நீக்கப்படும்.",
};

const websiteCopy: Record<WebsiteLanguage, Record<WebsiteCopyKey, string>> = {
  en,
  si,
  ta,
};

interface WebsiteLocalization {
  language: WebsiteLanguage;
  setLanguage: (language: WebsiteLanguage) => void;
  t: (key: WebsiteCopyKey) => string;
}

const WebsiteLocalizationContext = createContext<WebsiteLocalization | null>(
  null,
);

export function WebsiteLocalizationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<WebsiteLanguage>("en");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: WebsiteCopyKey) => websiteCopy[language][key],
    [language],
  );
  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t],
  );

  return (
    <WebsiteLocalizationContext.Provider value={value}>
      {children}
    </WebsiteLocalizationContext.Provider>
  );
}

export function useWebsiteLocalization() {
  const context = useContext(WebsiteLocalizationContext);
  if (!context) {
    throw new Error(
      "useWebsiteLocalization must be used within WebsiteLocalizationProvider",
    );
  }
  return context;
}
