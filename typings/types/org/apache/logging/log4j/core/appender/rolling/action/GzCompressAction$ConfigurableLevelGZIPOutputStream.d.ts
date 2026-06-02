import type { OutputStream } from '../../../../../../../../java/io/OutputStream.d.ts'
import type { GZIPOutputStream } from '../../../../../../../../java/util/zip/GZIPOutputStream.d.ts'
export class GzCompressAction$ConfigurableLevelGZIPOutputStream extends GZIPOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream, bufSize: number, level: number)
}