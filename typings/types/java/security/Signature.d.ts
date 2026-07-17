import type { JavaMap } from '../../JavaMap.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { PrivateKey } from '../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../java/security/PublicKey.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { SignatureSpi } from '../../java/security/SignatureSpi.d.ts'
import type { Certificate } from '../../java/security/cert/Certificate.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Signature extends SignatureSpi {
    static getInstance(paramarg0: string): Signature;
    static getInstance(paramarg0: string, paramarg1: string): Signature;
    static getInstance(paramarg0: string, paramarg1: JavaMap<any, any>): Signature;
    constructor(arg0: string)
    readonly algorithm: string;
    provider: JavaMap<any, any>;
    // private state: number;
    chooseFirstProvider(): void;
    clone(): Object;
    getAlgorithm(): string;
    getParameter(arg0: string): Object;
    getParameters(): AlgorithmParameters;
    getProvider(): JavaMap<any, any>;
    // private getProviderName(): string;
    initSign(arg0: PrivateKey): void;
    initSign(arg0: PrivateKey, arg1: SecureRandom): void;
    initSign(arg0: PrivateKey, arg1: AlgorithmParameterSpec, arg2: SecureRandom): void;
    initVerify(arg0: PublicKey): void;
    initVerify(arg0: PublicKey, arg1: AlgorithmParameterSpec): void;
    initVerify(arg0: Certificate): void;
    initVerify(arg0: Certificate, arg1: AlgorithmParameterSpec): void;
    setParameter(arg0: AlgorithmParameterSpec): void;
    setParameter(arg0: string, arg1: Object): void;
    sign(): number[];
    sign(arg0: number[], arg1: number, arg2: number): number;
    toString(): string;
    update(arg0: ByteBuffer): void;
    update(arg0: number): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    verify(arg0: number[]): boolean;
    verify(arg0: number[], arg1: number, arg2: number): boolean;
}