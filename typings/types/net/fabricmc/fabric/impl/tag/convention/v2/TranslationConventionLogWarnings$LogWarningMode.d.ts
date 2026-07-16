import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TranslationConventionLogWarnings$LogWarningMode extends Enum<TranslationConventionLogWarnings$LogWarningMode> {
    static FAIL: TranslationConventionLogWarnings$LogWarningMode;
    static SHORT: TranslationConventionLogWarnings$LogWarningMode;
    static SILENCED: TranslationConventionLogWarnings$LogWarningMode;
    static VERBOSE: TranslationConventionLogWarnings$LogWarningMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TranslationConventionLogWarnings$LogWarningMode;
    static values(): TranslationConventionLogWarnings$LogWarningMode[];
    private constructor()
    verbose(): boolean;
    name(): "SILENCED" | "SHORT" | "VERBOSE" | "FAIL";
}