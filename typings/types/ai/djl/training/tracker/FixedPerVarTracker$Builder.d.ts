import type { FixedPerVarTracker } from '../../../../ai/djl/training/tracker/FixedPerVarTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FixedPerVarTracker$Builder extends Object {
    private constructor()
    // private value: number;
    // private valueMap: { [key: string]: number };
    build(): FixedPerVarTracker;
    put(arg0: string, arg1: number): FixedPerVarTracker$Builder;
    putAll(arg0: { [key: string]: number }): FixedPerVarTracker$Builder;
    setDefaultValue(arg0: number): FixedPerVarTracker$Builder;
}