import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TranslatorOptions extends Enum<TranslatorOptions> {
    static IGNORE_STARTING_PERCENT: TranslatorOptions;
    static REQUIRE_PERCENT: TranslatorOptions;
    static SKIP_ARGS_TRANSLATION: TranslatorOptions;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TranslatorOptions;
    static values(): TranslatorOptions[];
    private constructor()
    name(): "SKIP_ARGS_TRANSLATION" | "REQUIRE_PERCENT" | "IGNORE_STARTING_PERCENT";
}