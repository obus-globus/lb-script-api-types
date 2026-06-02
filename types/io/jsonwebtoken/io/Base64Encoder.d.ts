import type { Base64 } from '../../../io/jsonwebtoken/io/Base64.d.ts'
import type { Base64Support } from '../../../io/jsonwebtoken/io/Base64Support.d.ts'
import type { Encoder } from '../../../io/jsonwebtoken/io/Encoder.d.ts'
export class Base64Encoder extends Base64Support implements Encoder<number[], string> {
    constructor()
    constructor(arg0: Base64)
    encode(arg0: number[]): string;
}