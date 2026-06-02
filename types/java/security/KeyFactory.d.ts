import type { Class } from '../../java/lang/Class.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { KeyFactorySpi } from '../../java/security/KeyFactorySpi.d.ts'
import type { PrivateKey } from '../../java/security/PrivateKey.d.ts'
import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { PublicKey } from '../../java/security/PublicKey.d.ts'
import type { KeySpec } from '../../java/security/spec/KeySpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class KeyFactory extends Object {
    static getInstance(paramarg0: string): KeyFactory;
    static getInstance(paramarg0: string, paramarg1: string): KeyFactory;
    static getInstance(paramarg0: string, paramarg1: Provider): KeyFactory;
    constructor(arg0: KeyFactorySpi, arg1: Provider, arg2: string)
    private constructor(arg0: string)
    readonly algorithm: string;
    // private lock: Object;
    readonly provider: Provider;
    // private serviceIterator: Iterator<Provider$Service>;
    // private spi: KeyFactorySpi;
    generatePrivate(arg0: KeySpec): PrivateKey;
    generatePublic(arg0: KeySpec): PublicKey;
    getAlgorithm(): string;
    getKeySpec<T extends KeySpec>(arg0: Key, arg1: Class<T>): T;
    getProvider(): Provider;
    // private nextSpi(arg0: KeyFactorySpi): KeyFactorySpi;
    translateKey(arg0: Key): Key;
}