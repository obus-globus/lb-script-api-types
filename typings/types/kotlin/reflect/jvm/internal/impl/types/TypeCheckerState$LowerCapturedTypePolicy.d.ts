import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TypeCheckerState$LowerCapturedTypePolicy extends Enum<TypeCheckerState$LowerCapturedTypePolicy> {
    static CHECK_ONLY_LOWER: TypeCheckerState$LowerCapturedTypePolicy;
    static CHECK_SUBTYPE_AND_LOWER: TypeCheckerState$LowerCapturedTypePolicy;
    static SKIP_LOWER: TypeCheckerState$LowerCapturedTypePolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeCheckerState$LowerCapturedTypePolicy;
    static values(): TypeCheckerState$LowerCapturedTypePolicy[];
    private constructor()
    name(): "CHECK_ONLY_LOWER" | "CHECK_SUBTYPE_AND_LOWER" | "SKIP_LOWER";
}