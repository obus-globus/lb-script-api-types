import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
export class Vector2Uniform extends Uniform {
    constructor(arg0: number, arg1: () => Vector2f)
    constructor(arg0: number, arg1: () => Vector2f, arg2: ValueUpdateNotifier)
    // private cachedValue: Vector2f;
    // private value: () => Vector2f;
    update(): void;
    // private updateValue(): void;
}