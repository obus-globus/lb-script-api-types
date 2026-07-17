import type { JavaMap } from '../../JavaMap.d.ts'
import type { KeyPair } from '../../java/security/KeyPair.d.ts'
import type { KeyPairGeneratorSpi } from '../../java/security/KeyPairGeneratorSpi.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
export abstract class KeyPairGenerator extends KeyPairGeneratorSpi {
    static getInstance(paramarg0: string): KeyPairGenerator;
    static getInstance(paramarg0: string, paramarg1: string): KeyPairGenerator;
    static getInstance(paramarg0: string, paramarg1: JavaMap<any, any>): KeyPairGenerator;
    constructor(arg0: string)
    readonly algorithm: string;
    provider: JavaMap<any, any>;
    disableFailover(): void;
    genKeyPair(): KeyPair;
    generateKeyPair(): KeyPair;
    getAlgorithm(): string;
    getProvider(): JavaMap<any, any>;
    initialize(arg0: AlgorithmParameterSpec): void;
    initialize(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;
    initialize(arg0: number): void;
    initialize(arg0: number, arg1: SecureRandom): void;
}