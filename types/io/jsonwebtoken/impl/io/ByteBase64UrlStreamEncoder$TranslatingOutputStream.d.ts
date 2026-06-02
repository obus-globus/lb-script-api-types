import type { FilteredOutputStream } from '../../../../io/jsonwebtoken/impl/io/FilteredOutputStream.d.ts'
import type { Encoder } from '../../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class ByteBase64UrlStreamEncoder$TranslatingOutputStream extends FilteredOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: Encoder<number[], string>)
    // private delegate: Encoder<number[], string>;
    // private dst: OutputStream;
    close(): void;
}