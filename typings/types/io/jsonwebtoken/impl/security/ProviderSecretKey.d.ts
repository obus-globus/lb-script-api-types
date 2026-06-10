import type { ProviderKey } from '../../../../io/jsonwebtoken/impl/security/ProviderKey.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class ProviderSecretKey extends ProviderKey<SecretKey> implements SecretKey {
    static serialVersionUID: number;
    static serialVersionUID: number;
    static getKey(paramarg0: Key | null): Key | null;
    static getProvider(paramarg0: Key, paramarg1: Provider): Provider;
    constructor(arg0: Provider, arg1: SecretKey)
}