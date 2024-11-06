export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Arabic",
    nativeName: "العربية",
    viewBox: "0 2178 82 66",
    code: "ar",
  },
    { name: "English", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
  
] as const;

export default languages;
