import type { Encoder } from '../../../io/jsonwebtoken/io/Encoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Encoders extends Object {
    static BASE64: Encoder<number[], string>;
    static BASE64URL: Encoder<number[], string>;
    private constructor()
}