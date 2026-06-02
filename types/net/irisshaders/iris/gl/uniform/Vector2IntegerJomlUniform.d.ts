import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Vector2i } from '../../../../../org/joml/Vector2i.d.ts'
export class Vector2IntegerJomlUniform extends Uniform {
    constructor(arg0: number, arg1: () => Vector2i)
    constructor(arg0: number, arg1: () => Vector2i, arg2: ValueUpdateNotifier)
    // private cachedValue: Vector2i;
    // private value: () => Vector2i;
    update(): void;
    // private updateValue(): void;
}