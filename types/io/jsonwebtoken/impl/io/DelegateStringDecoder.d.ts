import type { Decoder } from '../../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class DelegateStringDecoder extends Object implements Decoder<InputStream, InputStream> {
    constructor(arg0: Decoder<CharSequence, number[]>)
    // private delegate: Decoder<CharSequence, number[]>;
    decode(arg0: InputStream): InputStream;
}