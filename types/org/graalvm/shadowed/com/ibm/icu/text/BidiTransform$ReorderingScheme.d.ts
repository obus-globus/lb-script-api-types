import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { BidiTransform } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiTransform.d.ts'
import type { BidiTransform$Order } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BidiTransform$Order.d.ts'
export class BidiTransform$ReorderingScheme extends Enum<BidiTransform$ReorderingScheme> {
    static LOG_LTR_TO_LOG_LTR: BidiTransform$ReorderingScheme;
    static LOG_LTR_TO_LOG_RTL: BidiTransform$ReorderingScheme;
    static LOG_LTR_TO_VIS_LTR: BidiTransform$ReorderingScheme;
    static LOG_LTR_TO_VIS_RTL: BidiTransform$ReorderingScheme;
    static LOG_RTL_TO_LOG_LTR: BidiTransform$ReorderingScheme;
    static LOG_RTL_TO_LOG_RTL: BidiTransform$ReorderingScheme;
    static LOG_RTL_TO_VIS_LTR: BidiTransform$ReorderingScheme;
    static LOG_RTL_TO_VIS_RTL: BidiTransform$ReorderingScheme;
    static VIS_LTR_TO_LOG_LTR: BidiTransform$ReorderingScheme;
    static VIS_LTR_TO_LOG_RTL: BidiTransform$ReorderingScheme;
    static VIS_LTR_TO_VIS_LTR: BidiTransform$ReorderingScheme;
    static VIS_LTR_TO_VIS_RTL: BidiTransform$ReorderingScheme;
    static VIS_RTL_TO_LOG_LTR: BidiTransform$ReorderingScheme;
    static VIS_RTL_TO_LOG_RTL: BidiTransform$ReorderingScheme;
    static VIS_RTL_TO_VIS_LTR: BidiTransform$ReorderingScheme;
    static VIS_RTL_TO_VIS_RTL: BidiTransform$ReorderingScheme;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BidiTransform$ReorderingScheme;
    static values(): (Object | null)[];
    private constructor()
    doTransform(transform: BidiTransform): void;
    matches(inLevel: number, inOrder: BidiTransform$Order, outLevel: number, outOrder: BidiTransform$Order): boolean;
    name(): "LOG_LTR_TO_VIS_LTR" | "LOG_RTL_TO_VIS_LTR" | "LOG_LTR_TO_VIS_RTL" | "LOG_RTL_TO_VIS_RTL" | "VIS_LTR_TO_LOG_RTL" | "VIS_RTL_TO_LOG_RTL" | "VIS_LTR_TO_LOG_LTR" | "VIS_RTL_TO_LOG_LTR" | "LOG_LTR_TO_LOG_RTL" | "LOG_RTL_TO_LOG_LTR" | "VIS_LTR_TO_VIS_RTL" | "VIS_RTL_TO_VIS_LTR" | "LOG_LTR_TO_LOG_LTR" | "LOG_RTL_TO_LOG_RTL" | "VIS_LTR_TO_VIS_LTR" | "VIS_RTL_TO_VIS_RTL";
}