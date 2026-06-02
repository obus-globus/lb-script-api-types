import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4Compressor } from '../../../net/jpountz/lz4/LZ4Compressor.d.ts'
export class LZ4CompressorWithLength extends Object {
    constructor(arg0: LZ4Compressor)
    // private compressor: LZ4Compressor;
    compress(arg0: ByteBuffer, arg1: ByteBuffer): void;
    compress(arg0: ByteBuffer, arg1: number, arg2: number, arg3: ByteBuffer, arg4: number, arg5: number): number;
    compress(arg0: number[]): number[];
    compress(arg0: number[], arg1: number[]): number;
    compress(arg0: number[], arg1: number, arg2: number): number[];
    compress(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
    compress(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number, arg5: number): number;
    maxCompressedLength(arg0: number): number;
    // private putOriginalLength(arg0: ByteBuffer, arg1: number, arg2: number): void;
    // private putOriginalLength(arg0: number[], arg1: number, arg2: number): void;
}