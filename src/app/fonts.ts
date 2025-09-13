import localFont from "next/font/local";

export const suisseIntl = localFont({
  src: [
    {
      path: "../../public/assets/fonts/SuisseIntl-Bold-WebM.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SuisseIntl-SemiBold-WebM.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SuisseIntl-Medium-WebM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SuisseIntl-Book-WebM.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SuisseIntl-Regular-WebM.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-suisse-intl",
  preload: true,
});
