import type { TokenizedJwt } from '../../../io/jsonwebtoken/impl/TokenizedJwt.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class JwtTokenizer extends Object {
    constructor()
    tokenize<T extends TokenizedJwt>(arg0: Reader): T;
}