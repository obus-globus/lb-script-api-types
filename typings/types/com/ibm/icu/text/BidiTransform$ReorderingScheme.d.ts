import type { BidiTransform } from '../../../../com/ibm/icu/text/BidiTransform.d.ts'
import type { BidiTransform$Order } from '../../../../com/ibm/icu/text/BidiTransform$Order.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
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
    static valueOf(paramarg0: string): BidiTransform$ReorderingScheme;
    static values(): BidiTransform$ReorderingScheme[];
    private constructor()
    doTransform(arg0: BidiTransform): void;
    matches(arg0: number, arg1: BidiTransform$Order, arg2: number, arg3: BidiTransform$Order): boolean;
    name(): "LOG_LTR_TO_VIS_LTR" | "LOG_RTL_TO_VIS_LTR" | "LOG_LTR_TO_VIS_RTL" | "LOG_RTL_TO_VIS_RTL" | "VIS_LTR_TO_LOG_RTL" | "VIS_RTL_TO_LOG_RTL" | "VIS_LTR_TO_LOG_LTR" | "VIS_RTL_TO_LOG_LTR" | "LOG_LTR_TO_LOG_RTL" | "LOG_RTL_TO_LOG_LTR" | "VIS_LTR_TO_VIS_RTL" | "VIS_RTL_TO_VIS_LTR" | "LOG_LTR_TO_LOG_LTR" | "LOG_RTL_TO_LOG_RTL" | "VIS_LTR_TO_VIS_LTR" | "VIS_RTL_TO_VIS_RTL";
}