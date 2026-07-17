import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractCurve } from '../../../../io/jsonwebtoken/impl/security/AbstractCurve.d.ts'
import type { KeyLengthSupplier } from '../../../../io/jsonwebtoken/security/KeyLengthSupplier.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { KeySpec } from '../../../../java/security/spec/KeySpec.d.ts'
export class EdwardsCurve extends AbstractCurve implements KeyLengthSupplier {
    static Ed25519: EdwardsCurve;
    static Ed448: EdwardsCurve;
    static VALUES: EdwardsCurve[];
    static X25519: EdwardsCurve;
    static X448: EdwardsCurve;
    static derivePublic(paramarg0: PrivateKey): PublicKey;
    static findById(paramarg0: string): EdwardsCurve;
    static findByKey(paramarg0: Key): EdwardsCurve;
    static forKey(paramarg0: Key): EdwardsCurve;
    static isEdwards(paramarg0: Key): boolean;
    constructor(arg0: string, arg1: number)
    // private ASN1_OID: number[];
    // private OID: string;
    // private PRIVATE_KEY_ASN1_PREFIX: number[];
    // private PRIVATE_KEY_JDK11_PREFIX: number[];
    // private PUBLIC_KEY_ASN1_PREFIX: number[];
    // private encodedKeyByteLength: number;
    readonly keyBitLength: number;
    readonly signatureCurve: boolean;
    // private assertLength(arg0: number[], arg1: boolean): void;
    contains(arg0: Key): boolean;
    doGetKeyMaterial(arg0: Key): number[];
    getKeyBitLength(): number;
    getKeyMaterial(arg0: Key): number[];
    isSignatureCurve(): boolean;
    keyPair(): KeyPairBuilder;
    privateKeySpec(arg0: number[], arg1: boolean): KeySpec;
    toPrivateKey(arg0: number[], arg1: JavaMap<any, any>): PrivateKey;
    toPublicKey(arg0: number[], arg1: JavaMap<any, any>): PublicKey;
}