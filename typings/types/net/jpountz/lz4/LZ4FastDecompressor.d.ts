import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4Decompressor } from '../../../net/jpountz/lz4/LZ4Decompressor.d.ts'
export abstract class LZ4FastDecompressor extends Object implements LZ4Decompressor {
    constructor()
    decompress(arg0: ByteBuffer, arg1: ByteBuffer): void;
    decompress(arg0: ByteBuffer, arg1: number, arg2: ByteBuffer, arg3: number, arg4: number): number;
    decompress(arg0: number[], arg1: number[]): number;
    decompress(arg0: number[], arg1: number[], arg2: number): number;
    decompress(arg0: number[], arg1: number): number[];
    decompress(arg0: number[], arg1: number, arg2: number[], arg3: number, arg4: number): number;
    decompress(arg0: number[], arg1: number, arg2: number): number[];
    toString(): string;
}