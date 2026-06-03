import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
import type { DeflaterOutputStream } from '../../../../../../java/util/zip/DeflaterOutputStream.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { DeflateParameters } from '../../../../../../org/apache/commons/compress/compressors/deflate/DeflateParameters.d.ts'
export class DeflateCompressorOutputStream extends CompressorOutputStream<DeflaterOutputStream> {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: DeflateParameters)
    // private deflater: Deflater;
    close(): void;
    finish(): void;
    flush(): void;
    write(arg0: File): number;
    write(arg0: Path[]): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}