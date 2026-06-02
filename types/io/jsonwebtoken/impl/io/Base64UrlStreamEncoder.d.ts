import type { Encoder } from '../../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Base64UrlStreamEncoder extends Object implements Encoder<OutputStream, OutputStream> {
    static INSTANCE: Base64UrlStreamEncoder;
    private constructor()
    encode(arg0: OutputStream): OutputStream;
}