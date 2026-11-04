const translations = {
  'meta.title': 'Focus Assistant | Give your browsing a stopping point',
  'meta.description': 'Focus Assistant is a Chrome and Edge extension for setting daily website time limits, seeing time remaining, and blocking sites when time is up. Browsing history stays on your device by default.',
  'meta.ogLocale': 'en_US',
  'meta.ogDescription': 'Set daily website limits, see time remaining, and stop automatically when time is up.',
  'meta.ogImageAlt': 'Focus Assistant: set daily time limits for websites',
  'skip': 'Skip to main content',
  'brand.name': 'Focus Assistant',
  'brand.aria': 'Focus Assistant home',
  'header.install': 'Installation',
  'hero.eyebrow': 'Chrome & Edge extension',
  'hero.title1': 'Give your browsing,',
  'hero.title2': 'a stopping point.',
  'hero.description1': 'Set daily limits for websites that steal your time.',
  'hero.description2': 'See time remaining, stop automatically when it runs out, and start fresh tomorrow.',
  'hero.download': 'Download for free',
  'hero.preview': 'See how it works',
  'hero.metaAria': 'Product highlights',
  'hero.noAccount': 'No account',
  'hero.local': 'Local storage',
  'hero.free': 'Free to use',
  'timer.aria': 'Countdown preview: 25 minutes left for bilibili.com today, with a 30-minute daily limit',
  'timer.status': 'Timing',
  'timer.label': 'Time left today',
  'timer.used': 'Used 5 min',
  'timer.limit': '30-min limit',
  'timer.pause': 'Away or locked? Auto-pause',
  'timer.stopLabel': 'Enough for today',
  'timer.stopQuote1': 'Save your daily browsing',
  'timer.stopQuote2': 'for what matters.',
  'timer.stopFooter': 'Resets at midnight',
  'principles.aria': 'Core features',
  'principles.siteTitle': 'Any website',
  'principles.siteText': 'Independent daily limits',
  'principles.blockTitle': 'Automatic blocking',
  'principles.blockText': 'Access resumes the next day',
  'principles.activeTitle': 'Active-tab timing',
  'principles.activeText': 'Locking your screen pauses time',
  'features.eyebrow': 'Simple by design',
  'features.title1': 'Keep the choice',
  'features.title2': 'in your hands.',
  'features.description': 'No willpower battles. Just a clear boundary to end mindless browsing.',
  'feature1.title': 'Set a limit for each site',
  'feature1.body': 'Add the current site in one click and set its own daily limit. Edit or remove rules anytime, and move the floating timer wherever it won\'t block content.',
  'feature2.title': 'See where your time goes',
  'feature2.body': 'Explore local statistics by site, category, date, and hour. Optionally connect your own AI service for preference insights.',
  'feature3.title': 'Actually stop when time is up',
  'feature3.body': 'Get a reminder before your limit runs out, then a blocked page when it does. No complicated penalties—just stop for today and start again tomorrow.',
  'preview.eyebrow': 'Product preview',
  'preview.title': 'Your time, at a glance.',
  'preview.note': 'Actual extension UI · Demo data',
  'shots.limitsAlt': 'Focus Assistant popup: add the current site and manage daily limits and time remaining for bilibili.com and youtube.com',
  'shots.limitsCaption': '01 / Daily limits',
  'shots.limitsText': 'Add the current site in one click. See time remaining and rules clearly.',
  'shots.statisticsAlt': 'Local statistics overview: total time, site count, active days, and category, site, and daily time distributions',
  'shots.statisticsCaption': '02 / Local statistics',
  'shots.statisticsText': 'From overview to activity details, understand your browsing habits.',
  'shots.countdownAlt': 'Floating countdown and blocked page: show time remaining today and explain when access resumes',
  'shots.countdownCaption': '03 / Reminders & blocking',
  'shots.countdownText': 'From a gentle reminder to a clear stop, wrap up your day.',
  'install.eyebrow': 'Get started',
  'install.title1': 'Two minutes',
  'install.title2': 'to better focus.',
  'install.description': 'Available on the Chrome Web Store. Edge users can install the ZIP package manually.',
  'install.download': 'Download v1.7.1',
  'install.step1Title': 'Download and unzip',
  'install.step1Body': 'Unzip the extension into a folder you can keep long-term.',
  'install.step2Title': 'Open the extensions page',
  'install.step2Chrome': 'Chrome: ',
  'install.step2Edge': ' Edge: ',
  'install.step2Hint': '. Turn on Developer mode.',
  'install.step3Title': 'Load the unpacked extension',
  'install.step3Prefix': 'Choose the extracted folder containing ',
  'install.step3Suffix': ', then pin Focus Assistant to your toolbar.',
  'privacy.eyebrow': 'Private by default',
  'privacy.title1': 'Your history',
  'privacy.title2': 'stays in your browser.',
  'privacy.body1': 'No accounts, no first-party servers, and no ad tracking. Rules and browsing history stay on your device by default and can be cleared anytime.',
  'privacy.body2': 'Only when you choose AI preference analysis is a limited set of activity records sent to the AI service you configure.',
  'privacy.link': 'Read privacy policy',
  'footer.aria': 'Footer navigation',
  'footer.privacy': 'Privacy',
  'footer.source': 'Website source',
  'error.title': 'Page not found | Focus Assistant',
  'error.heading1': 'This page',
  'error.heading2': 'doesn\'t exist.',
  'error.body': 'Head back home to learn about Focus Assistant.',
  'error.home': 'Back to homepage'
};

const storageKey = 'focus-helper-language';
const languageToggle = document.getElementById('language-toggle');
const localizedText = [...document.querySelectorAll('[data-i18n]')].map(element => ({
  element,
  key: element.dataset.i18n,
  chinese: element.textContent
}));
const localizedAttributes = [...document.querySelectorAll('[data-i18n-attr]')].flatMap(element =>
  element.dataset.i18nAttr.split(' ').map(entry => {
    const [attribute, key] = entry.split(':');
    return { element, attribute, key, chinese: element.getAttribute(attribute) };
  })
);
let currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'zh-CN';

function setLanguage(language) {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
  localizedText.forEach(({ element, key, chinese }) => {
    const value = isEnglish ? translations[key] : chinese;
    if (value !== undefined) element.textContent = value;
  });
  localizedAttributes.forEach(({ element, attribute, key, chinese }) => {
    const value = isEnglish ? translations[key] : chinese;
    if (value !== undefined) element.setAttribute(attribute, value);
  });
  languageToggle.textContent = isEnglish ? '中文' : 'EN';
  languageToggle.setAttribute('aria-label', isEnglish ? '切换到中文' : 'Switch to English');
  currentLanguage = language;
}

setLanguage(currentLanguage);
languageToggle.hidden = false;
languageToggle.addEventListener('click', () => {
  const language = currentLanguage === 'en' ? 'zh-CN' : 'en';
  setLanguage(language);
  try {
    localStorage.setItem(storageKey, language);
  } catch {}
});
