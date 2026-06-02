import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Vector4f } from '../../../../../org/joml/Vector4f.d.ts'
export class Vector4Uniform extends Uniform {
    constructor(arg0: number, arg1: () => Vector4f)
    constructor(arg0: number, arg1: () => Vector4f, arg2: ValueUpdateNotifier)
    // private cachedValue: Vector4f;
    // private value: () => Vector4f;
    update(): void;
    // private updateValue(): void;
}