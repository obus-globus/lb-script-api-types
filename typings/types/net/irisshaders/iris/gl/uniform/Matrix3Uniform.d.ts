import type { FloatBuffer } from '../../../../../java/nio/FloatBuffer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Matrix3f } from '../../../../../org/joml/Matrix3f.d.ts'
import type { Matrix3fc } from '../../../../../org/joml/Matrix3fc.d.ts'
export class Matrix3Uniform extends Uniform {
    constructor(arg0: number, arg1: () => Matrix3fc)
    constructor(arg0: number, arg1: () => Matrix3fc, arg2: ValueUpdateNotifier)
    // private buffer: FloatBuffer;
    // private cachedValue: Matrix3f;
    // private value: () => Matrix3fc;
    update(): void;
    updateValue(): void;
}