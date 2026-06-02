import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class IntegerLiteralTypeConstructor$Companion$Mode extends Enum<IntegerLiteralTypeConstructor$Companion$Mode> {
    static COMMON_SUPER_TYPE: IntegerLiteralTypeConstructor$Companion$Mode;
    static INTERSECTION_TYPE: IntegerLiteralTypeConstructor$Companion$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IntegerLiteralTypeConstructor$Companion$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "COMMON_SUPER_TYPE" | "INTERSECTION_TYPE";
}