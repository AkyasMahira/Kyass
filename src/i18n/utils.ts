import { ui } from "./ui";

export function useTranslations(locale: string) {
  return ui[locale as keyof typeof ui] ?? ui.id;
}
