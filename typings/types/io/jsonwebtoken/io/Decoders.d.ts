import type { Decoder } from '../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Decoders extends Object {
    static BASE64: Decoder<CharSequence, number[]>;
    static BASE64URL: Decoder<CharSequence, number[]>;
    private constructor()
}