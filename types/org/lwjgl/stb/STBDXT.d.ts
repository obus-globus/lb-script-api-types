import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class STBDXT extends Object {
    static STB_DXT_DITHER: number;
    static STB_DXT_HIGHQUAL: number;
    static STB_DXT_NORMAL: number;
    static nstb_compress_bc4_block(paramarg0: number, paramarg1: number): void;
    static nstb_compress_bc5_block(paramarg0: number, paramarg1: number): void;
    static nstb_compress_dxt_block(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static stb_compress_bc4_block(paramarg0: ByteBuffer, paramarg1: ByteBuffer): void;
    static stb_compress_bc5_block(paramarg0: ByteBuffer, paramarg1: ByteBuffer): void;
    static stb_compress_dxt_block(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: boolean, paramarg3: number): void;
    constructor()
}