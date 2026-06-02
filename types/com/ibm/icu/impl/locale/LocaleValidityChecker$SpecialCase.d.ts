import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LocaleValidityChecker$SpecialCase extends Enum<LocaleValidityChecker$SpecialCase> {
    static anything: LocaleValidityChecker$SpecialCase;
    static codepoints: LocaleValidityChecker$SpecialCase;
    static normal: LocaleValidityChecker$SpecialCase;
    static reorder: LocaleValidityChecker$SpecialCase;
    static rgKey: LocaleValidityChecker$SpecialCase;
    static subdivision: LocaleValidityChecker$SpecialCase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocaleValidityChecker$SpecialCase;
    static values(): (Object | null)[];
    private constructor()
    name(): "normal" | "anything" | "reorder" | "codepoints" | "subdivision" | "rgKey";
}