import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
export class Vector4ArrayUniform extends Uniform {
    constructor(arg0: number, arg1: () => number[])
    constructor(arg0: number, arg1: () => number[], arg2: ValueUpdateNotifier)
    // private cachedValue: number[];
    // private value: () => number[];
    update(): void;
    // private updateValue(): void;
}