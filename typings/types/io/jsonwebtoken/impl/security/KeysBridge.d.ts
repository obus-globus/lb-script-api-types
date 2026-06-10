import type { KeySupplier } from '../../../../io/jsonwebtoken/security/KeySupplier.d.ts'
import type { Password } from '../../../../io/jsonwebtoken/security/Password.d.ts'
import type { PrivateKeyBuilder } from '../../../../io/jsonwebtoken/security/PrivateKeyBuilder.d.ts'
import type { SecretKeyBuilder } from '../../../../io/jsonwebtoken/security/SecretKeyBuilder.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeysBridge extends Object {
    static builder(paramarg0: PrivateKey): PrivateKeyBuilder;
    static builder(paramarg0: SecretKey): SecretKeyBuilder;
    static findAlgorithm(paramarg0: Key): string;
    static findBitLength(paramarg0: Key): number;
    static findEncoded(paramarg0: Key): number[];
    static getEncoded(paramarg0: Key): number[];
    static isGenericSecret(paramarg0: Key): boolean;
    static password(paramarg0: string[]): Password;
    static root(paramarg0: Key | null): Key | null;
    static root(paramarg0: KeySupplier<Key>): Key | null;
    static toString(paramarg0: Key): string;
    private constructor()
}