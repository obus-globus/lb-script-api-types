import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4FastDecompressor } from '../../../net/jpountz/lz4/LZ4FastDecompressor.d.ts'
import type { LZ4SafeDecompressor } from '../../../net/jpountz/lz4/LZ4SafeDecompressor.d.ts'
export class LZ4DecompressorWithLength extends Object {
    static getDecompressedLength(paramarg0: number[]): number;
    static getDecompressedLength(paramarg0: number[], paramarg1: number): number;
    static getDecompressedLength(paramarg0: ByteBuffer): number;
    static getDecompressedLength(paramarg0: ByteBuffer, paramarg1: number): number;
    constructor(arg0: LZ4FastDecompressor)
    constructor(arg0: LZ4SafeDecompressor)
    // private fastDecompressor: LZ4FastDecompressor;
    // private safeDecompressor: LZ4SafeDecompressor;
    decompress(arg0: ByteBuffer, arg1: ByteBuffer): void;
    decompress(arg0: ByteBuffer, arg1: number, arg2: ByteBuffer, arg3: number): number;
    decompress(arg0: ByteBuffer, arg1: number, arg2: number, arg3: ByteBuffer, arg4: number): number;
    decompress(arg0: number[]): number[];
    decompress(arg0: number[], arg1: number[]): number;
    decompress(arg0: number[], arg1: number): number[];
    decompress(arg0: number[], arg1: number, arg2: number[], arg3: number): number;
    decompress(arg0: number[], arg1: number, arg2: number): number[];
    decompress(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
}