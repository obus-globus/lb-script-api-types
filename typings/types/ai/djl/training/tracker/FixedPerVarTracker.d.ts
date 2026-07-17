import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FixedPerVarTracker$Builder } from '../../../../ai/djl/training/tracker/FixedPerVarTracker$Builder.d.ts'
import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FixedPerVarTracker extends Object implements ParameterTracker {
    static builder(): FixedPerVarTracker$Builder;
    constructor(arg0: FixedPerVarTracker$Builder)
    // private value: number;
    // private valueMap: JavaMap<string, number>;
    getNewValue(arg0: string, arg1: number): number;
}