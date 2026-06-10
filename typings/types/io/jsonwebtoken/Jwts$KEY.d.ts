import type { KeyAlgorithm } from '../../io/jsonwebtoken/security/KeyAlgorithm.d.ts'
import type { Password } from '../../io/jsonwebtoken/security/Password.d.ts'
import type { SecretKeyAlgorithm } from '../../io/jsonwebtoken/security/SecretKeyAlgorithm.d.ts'
import type { PrivateKey } from '../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../java/security/PublicKey.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Jwts$KEY extends Object {
    static A128GCMKW: SecretKeyAlgorithm;
    static A128KW: SecretKeyAlgorithm;
    static A192GCMKW: SecretKeyAlgorithm;
    static A192KW: SecretKeyAlgorithm;
    static A256GCMKW: SecretKeyAlgorithm;
    static A256KW: SecretKeyAlgorithm;
    static DIRECT: KeyAlgorithm<SecretKey, SecretKey>;
    static ECDH_ES: KeyAlgorithm<PublicKey, PrivateKey>;
    static ECDH_ES_A128KW: KeyAlgorithm<PublicKey, PrivateKey>;
    static ECDH_ES_A192KW: KeyAlgorithm<PublicKey, PrivateKey>;
    static ECDH_ES_A256KW: KeyAlgorithm<PublicKey, PrivateKey>;
    static PBES2_HS256_A128KW: KeyAlgorithm<Password, Password>;
    static PBES2_HS384_A192KW: KeyAlgorithm<Password, Password>;
    static PBES2_HS512_A256KW: KeyAlgorithm<Password, Password>;
    static RSA1_5: KeyAlgorithm<PublicKey, PrivateKey>;
    static RSA_OAEP: KeyAlgorithm<PublicKey, PrivateKey>;
    static RSA_OAEP_256: KeyAlgorithm<PublicKey, PrivateKey>;
    static get(): { [key: string]: KeyAlgorithm<Object, Object> };
    private constructor()
}