import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { ExemptionMechanismSpi } from '../../javax/crypto/ExemptionMechanismSpi.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ExemptionMechanism extends Object {
    static getInstance(paramarg0: string): ExemptionMechanism;
    static getInstance(paramarg0: string, paramarg1: string): ExemptionMechanism;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): ExemptionMechanism;
    constructor(arg0: ExemptionMechanismSpi, arg1: { [key: string]: any }, arg2: string)
    // private done: boolean;
    // private exmechSpi: ExemptionMechanismSpi;
    // private initialized: boolean;
    // private keyStored: Key;
    // private mechanism: string;
    readonly provider: { [key: string]: any };
    genExemptionBlob(): number[];
    genExemptionBlob(arg0: number[]): number;
    genExemptionBlob(arg0: number[], arg1: number): number;
    getName(): string;
    getOutputSize(arg0: number): number;
    getProvider(): { [key: string]: any };
    init(arg0: Key): void;
    init(arg0: Key, arg1: AlgorithmParameters): void;
    init(arg0: Key, arg1: AlgorithmParameterSpec): void;
    isCryptoAllowed(arg0: Key): boolean;
}