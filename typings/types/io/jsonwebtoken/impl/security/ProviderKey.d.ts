import type { KeySupplier } from '../../../../io/jsonwebtoken/security/KeySupplier.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProviderKey<T extends Key> extends Object implements KeySupplier<T>, Key {
    static serialVersionUID: number;
    static getKey<K extends Key>(paramarg0: K): K;
    static getProvider(paramarg0: Key, paramarg1: { [key: string]: any }): { [key: string]: any };
    constructor(arg0: { [key: string]: any }, arg1: T)
    readonly key: T;
    readonly provider: { [key: string]: any };
    getAlgorithm(): string;
    getEncoded(): number[];
    getFormat(): string;
    getKey(): T;
    getProvider(): { [key: string]: any };
}