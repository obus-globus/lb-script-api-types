import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MESAImageDMABufExport extends Object {
    static eglExportDMABUFImageMESA(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): boolean;
    static eglExportDMABUFImageMESA(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer): boolean;
    static eglExportDMABUFImageQueryMESA(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): boolean;
    static eglExportDMABUFImageQueryMESA(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: LongBuffer): boolean;
    static neglExportDMABUFImageMESA(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static neglExportDMABUFImageQueryMESA(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    constructor()
}