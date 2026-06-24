import type { PolynomialDecayTracker$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { PolynomialDecayTracker } from '../../../../ai/djl/training/tracker/PolynomialDecayTracker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolynomialDecayTracker$Builder extends Object {
    private constructor()
    constructor(arg0: PolynomialDecayTracker$1)
    // private baseValue: number;
    // private decaySteps: number;
    // private endLearningRate: number;
    // private power: number;
    build(): PolynomialDecayTracker;
    optPower(arg0: number): PolynomialDecayTracker$Builder;
    setBaseValue(arg0: number): PolynomialDecayTracker$Builder;
    setDecaySteps(arg0: number): PolynomialDecayTracker$Builder;
    setEndLearningRate(arg0: number): PolynomialDecayTracker$Builder;
}