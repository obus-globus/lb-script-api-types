import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { DEREncodable } from '../../java/security/DEREncodable.d.ts'
import type { PrivateKey } from '../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../java/security/PublicKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class KeyPair extends Object implements Serializable, DEREncodable {
    constructor(arg0: PublicKey, arg1: PrivateKey)
    // private privateKey: PrivateKey;
    // private publicKey: PublicKey;
    getPrivate(): PrivateKey;
    getPublic(): PublicKey;
}