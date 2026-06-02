import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export class Vector3Uniform extends Uniform {
    constructor(arg0: number, arg1: () => Vector3f)
    constructor(arg0: number, arg1: () => Vector3f, arg2: ValueUpdateNotifier)
    // private cachedValue: Vector3f;
    // private value: () => Vector3f;
    update(): void;
    // private updateValue(): void;
}