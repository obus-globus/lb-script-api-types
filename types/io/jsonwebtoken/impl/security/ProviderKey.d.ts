import type { KeySupplier } from '../../../../io/jsonwebtoken/security/KeySupplier.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProviderKey<T extends Key> extends Object implements KeySupplier<T>, Key {
    static serialVersionUID: number;
    static getKey(paramarg0: Object | null): Object | null;
    static getProvider(paramarg0: Key, paramarg1: Provider): Provider;
    constructor(arg0: Provider, arg1: T)
    readonly key: T;
    readonly provider: Provider;
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    getKey(): T;
    getProvider(): Provider;
}