import type { Encoder } from '../../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteBase64UrlStreamEncoder extends Object implements Encoder<OutputStream, OutputStream> {
    constructor(arg0: Encoder<number[], string>)
    // private delegate: Encoder<number[], string>;
    encode(arg0: OutputStream): OutputStream;
}