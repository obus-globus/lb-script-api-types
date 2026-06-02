import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Convolution extends Object {
    static gaussianKernel(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static gaussianKernel(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    constructor()
}