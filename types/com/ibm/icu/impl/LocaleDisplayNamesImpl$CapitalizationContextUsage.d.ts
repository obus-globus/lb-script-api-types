import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocaleDisplayNamesImpl$CapitalizationContextUsage extends Enum<LocaleDisplayNamesImpl$CapitalizationContextUsage> {
    static KEY: LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static KEYVALUE: LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static LANGUAGE: LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static SCRIPT: LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static TERRITORY: LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static VARIANT: LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocaleDisplayNamesImpl$CapitalizationContextUsage;
    static values(): (Object | null)[];
    private constructor()
    name(): "LANGUAGE" | "SCRIPT" | "TERRITORY" | "VARIANT" | "KEY" | "KEYVALUE";
}