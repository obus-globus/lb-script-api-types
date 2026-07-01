import type { Class } from '../../java/lang/Class.d.ts'
import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { KeySpec } from '../../java/security/spec/KeySpec.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { SecretKeyFactorySpi } from '../../javax/crypto/SecretKeyFactorySpi.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class SecretKeyFactory extends Object {
    static getInstance(paramarg0: string): SecretKeyFactory;
    static getInstance(paramarg0: string, paramarg1: string): SecretKeyFactory;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): SecretKeyFactory;
    constructor(arg0: SecretKeyFactorySpi, arg1: { [key: string]: any }, arg2: string)
    readonly algorithm: string;
    // private lock: Object;
    readonly provider: { [key: string]: any };
    // private serviceIterator: Iterator<Provider$Service>;
    // private spi: SecretKeyFactorySpi;
    generateSecret(arg0: KeySpec): SecretKey;
    getAlgorithm(): string;
    getKeySpec(arg0: SecretKey, arg1: Class<Object>): KeySpec;
    getProvider(): { [key: string]: any };
    // private nextSpi(arg0: SecretKeyFactorySpi): SecretKeyFactorySpi;
    translateKey(arg0: SecretKey): SecretKey;
}