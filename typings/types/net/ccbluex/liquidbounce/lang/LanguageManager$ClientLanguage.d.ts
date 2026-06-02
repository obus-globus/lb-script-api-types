import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class LanguageManager$ClientLanguage extends Enum<LanguageManager$ClientLanguage> implements Tagged {
    static AUTO: LanguageManager$ClientLanguage;
    static Companion: Tagged$Companion;
    static DE_DE: LanguageManager$ClientLanguage;
    static EN_PT: LanguageManager$ClientLanguage;
    static EN_US: LanguageManager$ClientLanguage;
    static JA_JP: LanguageManager$ClientLanguage;
    static NL_BE: LanguageManager$ClientLanguage;
    static NL_NL: LanguageManager$ClientLanguage;
    static PT_BR: LanguageManager$ClientLanguage;
    static RU_RU: LanguageManager$ClientLanguage;
    static TR_TR: LanguageManager$ClientLanguage;
    static UA_UA: LanguageManager$ClientLanguage;
    static ZH_CN: LanguageManager$ClientLanguage;
    static ZH_TW: LanguageManager$ClientLanguage;
    static getEntries(): LanguageManager$ClientLanguage[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LanguageManager$ClientLanguage;
    static values(): (Object | null)[];
    private constructor(tag: string, code: string | null)
    readonly code: string | null;
    readonly tag: string;
    name(): "AUTO" | "EN_US" | "EN_PT" | "DE_DE" | "JA_JP" | "ZH_CN" | "ZH_TW" | "RU_RU" | "UA_UA" | "PT_BR" | "TR_TR" | "NL_NL" | "NL_BE";
}