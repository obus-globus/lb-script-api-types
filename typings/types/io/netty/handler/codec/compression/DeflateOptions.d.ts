import type { CompressionOptions } from '../../../../../io/netty/handler/codec/compression/CompressionOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DeflateOptions extends Object implements CompressionOptions {
    constructor(arg0: number, arg1: number, arg2: number)
    // private compressionLevel: number;
    // private memLevel: number;
    // private windowBits: number;
    compressionLevel(): number;
    memLevel(): number;
    windowBits(): number;
}