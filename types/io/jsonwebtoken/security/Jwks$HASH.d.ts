import type { HashAlgorithm } from '../../../io/jsonwebtoken/security/HashAlgorithm.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Jwks$HASH extends Object {
    static SHA256: HashAlgorithm;
    static SHA384: HashAlgorithm;
    static SHA3_256: HashAlgorithm;
    static SHA3_384: HashAlgorithm;
    static SHA3_512: HashAlgorithm;
    static SHA512: HashAlgorithm;
    static get(): { [key: string]: HashAlgorithm };
    private constructor()
}