import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LZ4Compressor } from '../../../net/jpountz/lz4/LZ4Compressor.d.ts'
export class LZ4HCJavaSafeCompressor extends LZ4Compressor {
    static INSTANCE: LZ4Compressor;
    constructor()
    constructor(arg0: number)
    // private compressionLevel: number;
    // private maxAttempts: number;
    compress(arg0: ByteBuffer, arg1: number, arg2: number, arg3: ByteBuffer, arg4: number, arg5: number): number;
    compress(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;
}