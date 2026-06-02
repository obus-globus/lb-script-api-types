import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { FloatSupplier } from '../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
export class FloatUniform extends Uniform {
    constructor(arg0: number, arg1: () => kotlin.Float)
    constructor(arg0: number, arg1: () => kotlin.Float, arg2: ValueUpdateNotifier)
    // private cachedValue: number;
    // private value: () => kotlin.Float;
    update(): void;
    // private updateValue(): void;
}