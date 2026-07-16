import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4Compressor } from '../../../net/jpountz/lz4/LZ4Compressor.d.ts'
import type { LZ4Decompressor } from '../../../net/jpountz/lz4/LZ4Decompressor.d.ts'
import type { LZ4FastDecompressor } from '../../../net/jpountz/lz4/LZ4FastDecompressor.d.ts'
import type { LZ4SafeDecompressor } from '../../../net/jpountz/lz4/LZ4SafeDecompressor.d.ts'
import type { LZ4UnknownSizeDecompressor } from '../../../net/jpountz/lz4/LZ4UnknownSizeDecompressor.d.ts'
export class LZ4Factory extends Object {
    static fastestInstance(): LZ4Factory;
    static fastestJavaInstance(): LZ4Factory;
    static main(paramarg0: string[]): void;
    static nativeInsecureInstance(): LZ4Factory;
    static nativeInstance(): LZ4Factory;
    static safeInstance(): LZ4Factory;
    static unsafeInsecureInstance(): LZ4Factory;
    static unsafeInstance(): LZ4Factory;
    private constructor(arg0: string, arg1: boolean)
    // private fastCompressor: LZ4Compressor;
    // private fastDecompressor: LZ4FastDecompressor;
    // private highCompressor: LZ4Compressor;
    // private highCompressors: LZ4Compressor[];
    // private impl: string;
    // private safeDecompressor: LZ4SafeDecompressor;
    decompressor(): LZ4Decompressor;
    fastCompressor(): LZ4Compressor;
    fastDecompressor(): LZ4FastDecompressor;
    highCompressor(): LZ4Compressor;
    highCompressor(arg0: number): LZ4Compressor;
    safeDecompressor(): LZ4SafeDecompressor;
    toString(): string;
    unknownSizeDecompressor(): LZ4UnknownSizeDecompressor;
}