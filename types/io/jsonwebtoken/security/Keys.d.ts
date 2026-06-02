import type { SignatureAlgorithm } from '../../../io/jsonwebtoken/SignatureAlgorithm.d.ts'
import type { Password } from '../../../io/jsonwebtoken/security/Password.d.ts'
import type { PrivateKeyBuilder } from '../../../io/jsonwebtoken/security/PrivateKeyBuilder.d.ts'
import type { SecretKeyBuilder } from '../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { KeyPair } from '../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Keys extends Object {
    static builder(paramarg0: PrivateKey): PrivateKeyBuilder;
    static builder(paramarg0: SecretKey): SecretKeyBuilder;
    static hmacShaKeyFor(paramarg0: number[]): SecretKey;
    static keyPairFor(paramarg0: SignatureAlgorithm): KeyPair;
    static password(paramarg0: string[]): Password;
    static secretKeyFor(paramarg0: SignatureAlgorithm): SecretKey;
    private constructor()
}