import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Vector3i } from '../../../../../org/joml/Vector3i.d.ts'
export class Vector3IntegerUniform extends Uniform {
    constructor(arg0: number, arg1: () => Vector3i)
    constructor(arg0: number, arg1: () => Vector3i, arg2: ValueUpdateNotifier)
    // private cachedValue: Vector3i;
    // private value: () => Vector3i;
    update(): void;
    // private updateValue(): void;
}