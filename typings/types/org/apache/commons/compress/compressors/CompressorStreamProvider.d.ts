import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompressorInputStream } from '../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { CompressorOutputStream } from '../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
export interface CompressorStreamProvider extends Object{
    createCompressorInputStream(arg0: string, arg1: InputStream, arg2: boolean): CompressorInputStream;
    createCompressorOutputStream<T extends OutputStream>(arg0: string, arg1: T): CompressorOutputStream<T>;
    getInputStreamCompressorNames(): string[];
    getOutputStreamCompressorNames(): string[];
}