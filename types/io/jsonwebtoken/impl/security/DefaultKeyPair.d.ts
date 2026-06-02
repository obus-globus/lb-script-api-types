import type { KeyPair } from '../../../../io/jsonwebtoken/security/KeyPair.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyPair<A extends PublicKey, B extends PrivateKey> extends Object implements KeyPair<A, B> {
    constructor(arg0: A, arg1: B)
    // private jdkPair: KeyPair;
    // private privateKey: B;
    // private publicKey: A;
    getPrivate(): B;
    getPublic(): A;
    toJavaKeyPair(): KeyPair;
}