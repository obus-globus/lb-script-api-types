import type { Key } from '../../java/security/Key.d.ts'
import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { KeyAgreementSpi } from '../../javax/crypto/KeyAgreementSpi.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class KeyAgreement extends Object {
    static getInstance(paramarg0: string): KeyAgreement;
    static getInstance(paramarg0: string, paramarg1: string): KeyAgreement;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): KeyAgreement;
    private constructor(arg0: Provider$Service, arg1: Iterator<Provider$Service>, arg2: string)
    constructor(arg0: KeyAgreementSpi, arg1: { [key: string]: any }, arg2: string)
    readonly algorithm: string;
    // private firstService: Provider$Service;
    // private lock: Object;
    readonly provider: { [key: string]: any };
    // private serviceIterator: Iterator<Provider$Service>;
    // private spi: KeyAgreementSpi;
    chooseFirstProvider(): void;
    // private chooseProvider(arg0: number, arg1: Key, arg2: AlgorithmParameterSpec, arg3: SecureRandom): void;
    doPhase(arg0: Key, arg1: boolean): Key;
    generateSecret(): number[];
    generateSecret(arg0: number[], arg1: number): number;
    generateSecret(arg0: string): SecretKey;
    getAlgorithm(): string;
    getProvider(): { [key: string]: any };
    // private getProviderName(): string;
    // private implInit(arg0: KeyAgreementSpi, arg1: number, arg2: Key, arg3: AlgorithmParameterSpec, arg4: SecureRandom): void;
    init(arg0: Key): void;
    init(arg0: Key, arg1: SecureRandom): void;
    init(arg0: Key, arg1: AlgorithmParameterSpec): void;
    init(arg0: Key, arg1: AlgorithmParameterSpec, arg2: SecureRandom): void;
}