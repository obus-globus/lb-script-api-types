import type { Base64 } from '../../../io/jsonwebtoken/io/Base64.d.ts'
import type { Base64Support } from '../../../io/jsonwebtoken/io/Base64Support.d.ts'
import type { Decoder } from '../../../io/jsonwebtoken/io/Decoder.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Base64Decoder extends Base64Support implements Decoder<CharSequence, number[]> {
    constructor()
    constructor(arg0: Base64)
    decode(arg0: CharSequence): number[];
}