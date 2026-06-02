import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { Certificate } from '../../java/security/cert/Certificate.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Cipher$Transform } from '../../javax/crypto/Cipher$Transform.d.ts'
import type { CipherSpi } from '../../javax/crypto/CipherSpi.d.ts'
import type { CryptoPermission } from '../../javax/crypto/CryptoPermission.d.ts'
import type { ExemptionMechanism } from '../../javax/crypto/ExemptionMechanism.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class Cipher extends Object {
    static DECRYPT_MODE: number;
    static ENCRYPT_MODE: number;
    static PRIVATE_KEY: number;
    static PUBLIC_KEY: number;
    static SECRET_KEY: number;
    static UNWRAP_MODE: number;
    static WRAP_MODE: number;
    static getInstance(paramarg0: string): Cipher;
    static getInstance(paramarg0: string, paramarg1: string): Cipher;
    static getInstance(paramarg0: string, paramarg1: Provider): Cipher;
    static getMaxAllowedKeyLength(paramarg0: string): number;
    static getMaxAllowedParameterSpec(paramarg0: string): AlgorithmParameterSpec;
    constructor(arg0: CipherSpi, arg1: Provider, arg2: string)
    private constructor(arg0: CipherSpi, arg1: Provider$Service, arg2: Iterator<Provider$Service>, arg3: string, arg4: Cipher$Transform[])
    constructor(arg0: CipherSpi, arg1: string)
    // private cryptoPerm: CryptoPermission;
    // private exmech: ExemptionMechanism;
    // private firstService: Provider$Service;
    // private firstSpi: CipherSpi;
    // private initialized: boolean;
    // private lock: Object;
    // private opmode: number;
    readonly provider: Provider;
    // private serviceIterator: Iterator<Provider$Service>;
    // private spi: CipherSpi;
    // private transformation: string;
    // private transforms: Cipher$Transform[];
    // private checkCipherState(): void;
    // private checkCryptoPerm(arg0: CipherSpi, arg1: Key): void;
    // private checkCryptoPerm(arg0: CipherSpi, arg1: Key, arg2: AlgorithmParameters): void;
    // private checkCryptoPerm(arg0: CipherSpi, arg1: Key, arg2: AlgorithmParameterSpec): void;
    chooseFirstProvider(): void;
    // private chooseProvider(arg0: number, arg1: number, arg2: Key, arg3: AlgorithmParameterSpec, arg4: AlgorithmParameters, arg5: SecureRandom): void;
    doFinal(): number[];
    doFinal(arg0: ByteBuffer, arg1: ByteBuffer): number;
    doFinal(arg0: number[]): number[];
    doFinal(arg0: number[], arg1: number): number;
    doFinal(arg0: number[], arg1: number, arg2: number): number[];
    doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
    doFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
    getAlgorithm(): string;
    // private getAlgorithmParameterSpec(arg0: AlgorithmParameters): AlgorithmParameterSpec;
    getBlockSize(): number;
    getExemptionMechanism(): ExemptionMechanism;
    getIV(): number[];
    getOutputSize(arg0: number): number;
    getParameters(): AlgorithmParameters;
    getProvider(): Provider;
    // private getProviderName(): string;
    // private implInit(arg0: CipherSpi, arg1: number, arg2: number, arg3: Key, arg4: AlgorithmParameterSpec, arg5: AlgorithmParameters, arg6: SecureRandom): void;
    init(arg0: number, arg1: Key): void;
    init(arg0: number, arg1: Key, arg2: AlgorithmParameters): void;
    init(arg0: number, arg1: Key, arg2: AlgorithmParameters, arg3: SecureRandom): void;
    init(arg0: number, arg1: Key, arg2: SecureRandom): void;
    init(arg0: number, arg1: Key, arg2: AlgorithmParameterSpec): void;
    init(arg0: number, arg1: Key, arg2: AlgorithmParameterSpec, arg3: SecureRandom): void;
    init(arg0: number, arg1: Certificate): void;
    init(arg0: number, arg1: Certificate, arg2: SecureRandom): void;
    // private initCryptoPermission(): void;
    // private passCryptoPermCheck(arg0: CipherSpi, arg1: Key, arg2: AlgorithmParameterSpec): boolean;
    toString(): string;
    unwrap(arg0: number[], arg1: string, arg2: number): Key;
    update(arg0: ByteBuffer, arg1: ByteBuffer): number;
    update(arg0: number[]): number[];
    update(arg0: number[], arg1: number, arg2: number): number[];
    update(arg0: number[], arg1: number, arg2: number, arg3: number[]): number;
    update(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
    updateAAD(arg0: ByteBuffer): void;
    updateAAD(arg0: number[]): void;
    updateAAD(arg0: number[], arg1: number, arg2: number): void;
    wrap(arg0: Key): number[];
}