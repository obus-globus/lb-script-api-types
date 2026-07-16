import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class IntegerLiteralTypeConstructor$Companion$Mode extends Enum<IntegerLiteralTypeConstructor$Companion$Mode> {
    static COMMON_SUPER_TYPE: IntegerLiteralTypeConstructor$Companion$Mode;
    static INTERSECTION_TYPE: IntegerLiteralTypeConstructor$Companion$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IntegerLiteralTypeConstructor$Companion$Mode;
    static values(): IntegerLiteralTypeConstructor$Companion$Mode[];
    private constructor()
    name(): "COMMON_SUPER_TYPE" | "INTERSECTION_TYPE";
}