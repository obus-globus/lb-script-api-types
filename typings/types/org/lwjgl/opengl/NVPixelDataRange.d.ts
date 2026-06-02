import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NVPixelDataRange extends Object {
    static GL_READ_PIXEL_DATA_RANGE_LENGTH_NV: number;
    static GL_READ_PIXEL_DATA_RANGE_NV: number;
    static GL_READ_PIXEL_DATA_RANGE_POINTER_NV: number;
    static GL_WRITE_PIXEL_DATA_RANGE_LENGTH_NV: number;
    static GL_WRITE_PIXEL_DATA_RANGE_NV: number;
    static GL_WRITE_PIXEL_DATA_RANGE_POINTER_NV: number;
    static glFlushPixelDataRangeNV(paramarg0: number): void;
    static glPixelDataRangeNV(paramarg0: number, paramarg1: ByteBuffer): void;
    static nglPixelDataRangeNV(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}