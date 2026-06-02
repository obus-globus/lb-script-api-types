import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PatternStringUtils$PatternSignType extends Enum<PatternStringUtils$PatternSignType> {
    static NEG: PatternStringUtils$PatternSignType;
    static POS: PatternStringUtils$PatternSignType;
    static POS_SIGN: PatternStringUtils$PatternSignType;
    static VALUES: (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PatternStringUtils$PatternSignType;
    static values(): (Object | null)[];
    private constructor()
    name(): "POS" | "POS_SIGN" | "NEG";
}