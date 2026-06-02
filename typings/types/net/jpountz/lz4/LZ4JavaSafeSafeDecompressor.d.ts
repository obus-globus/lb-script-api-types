import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LZ4SafeDecompressor } from '../../../net/jpountz/lz4/LZ4SafeDecompressor.d.ts'
export class LZ4JavaSafeSafeDecompressor extends LZ4SafeDecompressor {
    static INSTANCE: LZ4SafeDecompressor;
    constructor()
    decompress(arg0: ByteBuffer, arg1: number, arg2: number, arg3: ByteBuffer, arg4: number, arg5: number): number;
    decompress(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;
}