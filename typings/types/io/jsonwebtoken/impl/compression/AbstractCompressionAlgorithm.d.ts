import type { CompressionCodec } from '../../../../io/jsonwebtoken/CompressionCodec.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { CompressionAlgorithm } from '../../../../io/jsonwebtoken/io/CompressionAlgorithm.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractCompressionAlgorithm extends Object implements CompressionCodec, CompressionAlgorithm {
    constructor(arg0: string)
    // private COMPRESS_FN: Function<number[], number[]>;
    // private DECOMPRESS_FN: Function<number[], number[]>;
    // private IS_WRAP_FN: Function<InputStream, InputStream>;
    // private OS_WRAP_FN: Function<OutputStream, OutputStream>;
    readonly id: string;
    compress(arg0: OutputStream): OutputStream;
    compress(arg0: number[]): number[];
    decompress(arg0: InputStream): InputStream;
    decompress(arg0: number[]): number[];
    doCompress(arg0: OutputStream): OutputStream;
    // private doCompress(arg0: number[]): number[];
    doDecompress(arg0: InputStream): InputStream;
    doDecompress(arg0: number[]): number[];
    getAlgorithmName(): string;
    getId(): string;
}