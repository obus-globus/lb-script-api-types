import type { ValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { ClientLanguage } from '../../../../net/ccbluex/liquidbounce/lang/ClientLanguage.d.ts'
import type { LanguageManager$ClientLanguage } from '../../../../net/ccbluex/liquidbounce/lang/LanguageManager$ClientLanguage.d.ts'
export class LanguageManager extends ValueGroup {
    static INSTANCE: LanguageManager;
    // private COMMON_UNDERSTOOD_LANGUAGE: LanguageManager$ClientLanguage;
    readonly MINECRAFT_LANGUAGE: LanguageManager$ClientLanguage | null;
    clientLanguage: LanguageManager$ClientLanguage;
    readonly languageCodes: string[];
    // private languageRegistry: Map<LanguageManager$ClientLanguage, ClientLanguage>;
    // private currentLanguageChoice(): LanguageManager$ClientLanguage;
    getCommonLanguage(): ClientLanguage | null;
    getLanguage(): ClientLanguage | null;
    hasFallbackTranslation(key: string): boolean;
    languageChoiceFromCode(code: string): LanguageManager$ClientLanguage | null;
    loadDefault(): void;
    // private loadLanguage(choice: LanguageManager$ClientLanguage): ClientLanguage | null;
}