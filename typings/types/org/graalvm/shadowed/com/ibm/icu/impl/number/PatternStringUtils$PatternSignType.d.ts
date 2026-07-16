import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PatternStringUtils$PatternSignType extends Enum<PatternStringUtils$PatternSignType> {
    static NEG: PatternStringUtils$PatternSignType;
    static POS: PatternStringUtils$PatternSignType;
    static POS_SIGN: PatternStringUtils$PatternSignType;
    static VALUES: PatternStringUtils$PatternSignType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PatternStringUtils$PatternSignType;
    static values(): PatternStringUtils$PatternSignType[];
    private constructor()
    name(): "POS" | "POS_SIGN" | "NEG";
}