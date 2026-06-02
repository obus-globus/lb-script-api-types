import type { FloatBuffer } from '../../../../../java/nio/FloatBuffer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class MatrixUniform extends Uniform {
    constructor(arg0: number, arg1: () => Matrix4fc)
    constructor(arg0: number, arg1: () => Matrix4fc, arg2: ValueUpdateNotifier)
    // private buffer: FloatBuffer;
    // private cachedValue: Matrix4f;
    // private value: () => Matrix4fc;
    update(): void;
    updateValue(): void;
}