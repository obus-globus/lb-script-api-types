import type { ParameterTracker } from '../../../../ai/djl/training/tracker/ParameterTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Tracker extends ParameterTracker, Object{
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}