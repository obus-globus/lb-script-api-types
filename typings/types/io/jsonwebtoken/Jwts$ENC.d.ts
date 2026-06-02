import type { AeadAlgorithm } from '../../io/jsonwebtoken/security/AeadAlgorithm.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Jwts$ENC extends Object {
    static A128CBC_HS256: AeadAlgorithm;
    static A128GCM: AeadAlgorithm;
    static A192CBC_HS384: AeadAlgorithm;
    static A192GCM: AeadAlgorithm;
    static A256CBC_HS512: AeadAlgorithm;
    static A256GCM: AeadAlgorithm;
    static get(): { [key: string]: AeadAlgorithm };
    private constructor()
}