import type { CompressionOptions } from '../../../../../io/netty/handler/codec/compression/CompressionOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZstdOptions extends Object implements CompressionOptions {
    constructor(arg0: number, arg1: number, arg2: number)
    // private blockSize: number;
    // private compressionLevel: number;
    // private maxEncodeSize: number;
    blockSize(): number;
    compressionLevel(): number;
    maxEncodeSize(): number;
}