import type { KeyPair as KeyPair_2 } from '../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyPair<A extends PublicKey, B extends PrivateKey> extends Object{
    getPrivate(): B;
    getPublic(): A;
    toJavaKeyPair(): KeyPair_2;
}