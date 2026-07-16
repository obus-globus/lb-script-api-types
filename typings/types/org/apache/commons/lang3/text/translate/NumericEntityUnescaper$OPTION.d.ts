import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NumericEntityUnescaper$OPTION extends Enum<NumericEntityUnescaper$OPTION> {
    static errorIfNoSemiColon: NumericEntityUnescaper$OPTION;
    static semiColonOptional: NumericEntityUnescaper$OPTION;
    static semiColonRequired: NumericEntityUnescaper$OPTION;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumericEntityUnescaper$OPTION;
    static values(): NumericEntityUnescaper$OPTION[];
    private constructor()
    name(): "semiColonRequired" | "semiColonOptional" | "errorIfNoSemiColon";
}