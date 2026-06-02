import type { CurveValue } from '../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export abstract class AnimatedValueGroup extends ValueGroup {
    constructor(name: string)
    // private /*not mapped: */ getCurve(): CurveValue;
    // private period: number;
    // private /*not mapped: */ getPeriod(): number;
    // private symmetric: boolean;
    // private /*not mapped: */ getSymmetric(): boolean;
    current(): number;
}