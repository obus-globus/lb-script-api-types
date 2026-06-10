import type { MacAlgorithm } from '../../io/jsonwebtoken/security/MacAlgorithm.d.ts'
import type { SecureDigestAlgorithm } from '../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { SignatureAlgorithm } from '../../io/jsonwebtoken/security/SignatureAlgorithm.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Jwts$SIG extends Object {
    static ES256: SignatureAlgorithm;
    static ES384: SignatureAlgorithm;
    static ES512: SignatureAlgorithm;
    static EdDSA: SignatureAlgorithm;
    static HS256: MacAlgorithm;
    static HS384: MacAlgorithm;
    static HS512: MacAlgorithm;
    static NONE: SecureDigestAlgorithm<Key, Key>;
    static PS256: SignatureAlgorithm;
    static PS384: SignatureAlgorithm;
    static PS512: SignatureAlgorithm;
    static RS256: SignatureAlgorithm;
    static RS384: SignatureAlgorithm;
    static RS512: SignatureAlgorithm;
    static get(): { [key: string]: SecureDigestAlgorithm<Object, Object> };
    private constructor()
}