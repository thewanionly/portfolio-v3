import { useEffect, useState } from "react";

import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/i18n/ui";

enum Language {
  English = "en",
  Japanese = "jp",
}

export function LanguageSelector() {
  const [language, setLanguage] = useState<Language>(Language.English);

  useEffect(() => {
    // Access query parameters using URLSearchParams
    const searchParams = new URLSearchParams(window.location.search);
    const lang = (searchParams.get("lang") as Language) ?? Language.English;

    setLanguage(lang);
  }, []);

  useEffect(() => {
    // Update URL with the new language (TODO:)
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }, [language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Select a language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([lang, label]) => (
          <DropdownMenuItem key={lang}>
            <a className="w-full" href={`?lang=${lang}`}>
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
