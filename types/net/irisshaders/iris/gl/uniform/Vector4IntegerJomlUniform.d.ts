import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Vector4i } from '../../../../../org/joml/Vector4i.d.ts'
export class Vector4IntegerJomlUniform extends Uniform {
    constructor(arg0: number, arg1: () => Vector4i)
    constructor(arg0: number, arg1: () => Vector4i, arg2: ValueUpdateNotifier)
    // private cachedValue: Vector4i;
    // private value: () => Vector4i;
    update(): void;
    // private updateValue(): void;
}