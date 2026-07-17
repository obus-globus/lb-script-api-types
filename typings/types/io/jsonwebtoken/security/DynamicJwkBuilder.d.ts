import type { JavaMap } from '../../../JavaMap.d.ts'
import type { EcPrivateJwkBuilder } from '../../../io/jsonwebtoken/security/EcPrivateJwkBuilder.d.ts'
import type { EcPublicJwkBuilder } from '../../../io/jsonwebtoken/security/EcPublicJwkBuilder.d.ts'
import type { JwkBuilder } from '../../../io/jsonwebtoken/security/JwkBuilder.d.ts'
import type { OctetPrivateJwkBuilder } from '../../../io/jsonwebtoken/security/OctetPrivateJwkBuilder.d.ts'
import type { OctetPublicJwkBuilder } from '../../../io/jsonwebtoken/security/OctetPublicJwkBuilder.d.ts'
import type { PrivateJwkBuilder } from '../../../io/jsonwebtoken/security/PrivateJwkBuilder.d.ts'
import type { PublicJwkBuilder } from '../../../io/jsonwebtoken/security/PublicJwkBuilder.d.ts'
import type { RsaPrivateJwkBuilder } from '../../../io/jsonwebtoken/security/RsaPrivateJwkBuilder.d.ts'
import type { RsaPublicJwkBuilder } from '../../../io/jsonwebtoken/security/RsaPublicJwkBuilder.d.ts'
import type { SecretJwkBuilder } from '../../../io/jsonwebtoken/security/SecretJwkBuilder.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { KeyPair } from '../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { ECPrivateKey } from '../../../java/security/interfaces/ECPrivateKey.d.ts'
import type { ECPublicKey } from '../../../java/security/interfaces/ECPublicKey.d.ts'
import type { RSAPrivateKey } from '../../../java/security/interfaces/RSAPrivateKey.d.ts'
import type { RSAPublicKey } from '../../../java/security/interfaces/RSAPublicKey.d.ts'
import type { SecretKey } from '../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DynamicJwkBuilder<K extends Key, J extends JavaMap<any, any>> extends JwkBuilder<K, J, DynamicJwkBuilder<K, J>>, Object{
    chain<A extends PublicKey, B extends PrivateKey>(arg0: X509Certificate[]): PublicJwkBuilder<A, B, any, any, any, any>;
    ecChain(arg0: X509Certificate[]): EcPublicJwkBuilder;
    ecKeyPair(arg0: KeyPair): EcPrivateJwkBuilder;
    key<A extends PublicKey, B extends PrivateKey>(arg0: A): PublicJwkBuilder<A, B, any, any, any, any>;
    key<B extends PrivateKey, A extends PublicKey>(arg0: B): PrivateJwkBuilder<B, A, any, any, any>;
    key(arg0: ECPrivateKey): EcPrivateJwkBuilder;
    key(arg0: ECPublicKey): EcPublicJwkBuilder;
    key(arg0: RSAPrivateKey): RsaPrivateJwkBuilder;
    key(arg0: RSAPublicKey): RsaPublicJwkBuilder;
    key(arg0: SecretKey): SecretJwkBuilder;
    keyPair<B extends PrivateKey, A extends PublicKey>(arg0: KeyPair): PrivateJwkBuilder<B, A, any, any, any>;
    octetChain<A extends PublicKey, B extends PrivateKey>(arg0: X509Certificate[]): OctetPublicJwkBuilder<A, B>;
    octetKey<A extends PrivateKey, B extends PublicKey>(arg0: A): OctetPrivateJwkBuilder<A, B>;
    octetKey<A extends PublicKey, B extends PrivateKey>(arg0: A): OctetPublicJwkBuilder<A, B>;
    octetKeyPair<A extends PrivateKey, B extends PublicKey>(arg0: KeyPair): OctetPrivateJwkBuilder<A, B>;
    rsaChain(arg0: X509Certificate[]): RsaPublicJwkBuilder;
    rsaKeyPair(arg0: KeyPair): RsaPrivateJwkBuilder;
}