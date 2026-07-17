import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompressorInputStream } from '../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { CompressorOutputStream } from '../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { CompressorStreamProvider } from '../../../../../org/apache/commons/compress/compressors/CompressorStreamProvider.d.ts'
export class CompressorStreamFactory extends Object implements CompressorStreamProvider {
    static BROTLI: string;
    static BZIP2: string;
    static DEFLATE: string;
    static DEFLATE64: string;
    static GZIP: string;
    static LZ4_BLOCK: string;
    static LZ4_FRAMED: string;
    static LZMA: string;
    static PACK200: string;
    static SNAPPY_FRAMED: string;
    static SNAPPY_RAW: string;
    static XZ: string;
    static Z: string;
    static ZSTANDARD: string;
    static detect(paramarg0: InputStream): string;
    static findAvailableCompressorInputStreamProviders(): JavaMap<string, CompressorStreamProvider>;
    static findAvailableCompressorOutputStreamProviders(): JavaMap<string, CompressorStreamProvider>;
    static getBrotli(): string;
    static getBzip2(): string;
    static getDeflate(): string;
    static getDeflate64(): string;
    static getGzip(): string;
    static getLZ4Block(): string;
    static getLZ4Framed(): string;
    static getLzma(): string;
    static getPack200(): string;
    static getSingleton(): CompressorStreamFactory;
    static getSnappyFramed(): string;
    static getSnappyRaw(): string;
    static getXz(): string;
    static getZ(): string;
    static getZstandard(): string;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    readonly compressorInputStreamProviders: JavaMap<string, CompressorStreamProvider>;
    readonly compressorOutputStreamProviders: JavaMap<string, CompressorStreamProvider>;
    readonly decompressConcatenated: boolean;
    // private decompressUntilEof: boolean;
    // private memoryLimitInKb: number;
    createCompressorInputStream(arg0: InputStream): CompressorInputStream;
    createCompressorInputStream(arg0: InputStream, arg1: string[]): CompressorInputStream;
    createCompressorInputStream(arg0: string, arg1: InputStream): CompressorInputStream;
    createCompressorInputStream(arg0: string, arg1: InputStream, arg2: boolean): CompressorInputStream;
    createCompressorOutputStream(arg0: string, arg1: OutputStream): CompressorOutputStream<OutputStream>;
    getCompressorInputStreamProviders(): JavaMap<string, CompressorStreamProvider>;
    getCompressorOutputStreamProviders(): JavaMap<string, CompressorStreamProvider>;
    getDecompressConcatenated(): boolean;
    getDecompressUntilEOF(): boolean;
    getInputStreamCompressorNames(): string[];
    getOutputStreamCompressorNames(): string[];
    setDecompressConcatenated(arg0: boolean): void;
}