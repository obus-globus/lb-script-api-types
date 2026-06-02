import type { ProviderKey } from '../../../../io/jsonwebtoken/impl/security/ProviderKey.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProviderPrivateKey extends ProviderKey<PrivateKey> implements PrivateKey {
    static serialVersionUID: number;
    static serialVersionUID: number;
    static getKey(paramarg0: Object | null): Object | null;
    static getProvider(paramarg0: Key, paramarg1: Provider): Provider;
    constructor(arg0: Provider, arg1: PrivateKey)
}