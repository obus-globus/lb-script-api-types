import type { FloatBuffer } from '../../../../../java/nio/FloatBuffer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
export class MatrixFromFloatArrayUniform extends Uniform {
    constructor(arg0: number, arg1: () => number[])
    // private buffer: FloatBuffer;
    // private cachedValue: number[];
    // private value: () => number[];
    update(): void;
}