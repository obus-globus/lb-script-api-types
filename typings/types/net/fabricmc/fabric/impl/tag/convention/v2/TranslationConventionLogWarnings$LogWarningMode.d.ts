import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TranslationConventionLogWarnings$LogWarningMode extends Enum<TranslationConventionLogWarnings$LogWarningMode> {
    static FAIL: TranslationConventionLogWarnings$LogWarningMode;
    static SHORT: TranslationConventionLogWarnings$LogWarningMode;
    static SILENCED: TranslationConventionLogWarnings$LogWarningMode;
    static VERBOSE: TranslationConventionLogWarnings$LogWarningMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TranslationConventionLogWarnings$LogWarningMode;
    static values(): (Object | null)[];
    private constructor()
    verbose(): boolean;
    name(): "SILENCED" | "SHORT" | "VERBOSE" | "FAIL";
}