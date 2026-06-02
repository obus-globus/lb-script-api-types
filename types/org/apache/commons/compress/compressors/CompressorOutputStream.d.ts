import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { CompressFilterOutputStream } from '../../../../../org/apache/commons/compress/CompressFilterOutputStream.d.ts'
export abstract class CompressorOutputStream<T extends OutputStream> extends CompressFilterOutputStream<T> {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: T)
}