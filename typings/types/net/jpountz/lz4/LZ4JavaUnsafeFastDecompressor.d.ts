import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LZ4FastDecompressor } from '../../../net/jpountz/lz4/LZ4FastDecompressor.d.ts'
export class LZ4JavaUnsafeFastDecompressor extends LZ4FastDecompressor {
    static INSTANCE: LZ4FastDecompressor;
    constructor()
    decompress(arg0: ByteBuffer, arg1: number, arg2: ByteBuffer, arg3: number, arg4: number): number;
    // private decompress(arg0: ByteBuffer, arg1: number, arg2: number, arg3: ByteBuffer, arg4: number, arg5: number): number;
    decompress(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): number;
    // private decompress(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;
}