import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ProviderKey } from '../../../../io/jsonwebtoken/impl/security/ProviderKey.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class ProviderSecretKey extends ProviderKey<SecretKey> implements SecretKey {
    static serialVersionUID: number;
    static getKey<K extends Key>(paramarg0: K): K;
    static getProvider(paramarg0: Key, paramarg1: JavaMap<any, any>): JavaMap<any, any>;
    constructor(arg0: JavaMap<any, any>, arg1: SecretKey)
}