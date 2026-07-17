import type { PolynomialDecayTracker$Builder } from '../../../../ai/djl/training/tracker/PolynomialDecayTracker$Builder.d.ts'
import type { Tracker } from '../../../../ai/djl/training/tracker/Tracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolynomialDecayTracker extends Object implements Tracker {
    static builder(): PolynomialDecayTracker$Builder;
    constructor(arg0: PolynomialDecayTracker$Builder)
    // private baseValue: number;
    // private decaySteps: number;
    // private endLearningRate: number;
    // private power: number;
    getNewValue(arg0: number): number;
    getNewValue(arg0: string, arg1: number): number;
}