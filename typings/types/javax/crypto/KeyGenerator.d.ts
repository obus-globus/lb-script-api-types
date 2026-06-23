import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { KeyGeneratorSpi } from '../../javax/crypto/KeyGeneratorSpi.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class KeyGenerator extends Object {
    static getInstance(paramarg0: string): KeyGenerator;
    static getInstance(paramarg0: string, paramarg1: string): KeyGenerator;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): KeyGenerator;
    constructor(arg0: KeyGeneratorSpi, arg1: { [key: string]: any }, arg2: string)
    private constructor(arg0: string)
    readonly algorithm: string;
    // private initKeySize: number;
    // private initParams: AlgorithmParameterSpec;
    // private initRandom: SecureRandom;
    // private initType: number;
    // private lock: Object;
    readonly provider: { [key: string]: any };
    // private serviceIterator: Iterator<Provider$Service>;
    // private spi: KeyGeneratorSpi;
    disableFailover(): void;
    generateKey(): SecretKey;
    getAlgorithm(): string;
    getProvider(): { [key: string]: any };
    // private getProviderName(): string;
    init(arg0: SecureRandom): void;
    init(arg0: AlgorithmParameterSpec): void;
    init(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;
    init(arg0: number): void;
    init(arg0: number, arg1: SecureRandom): void;
    // private nextSpi(arg0: KeyGeneratorSpi, arg1: boolean): KeyGeneratorSpi;
}