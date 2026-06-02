import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ExemptionMechanismSpi extends Object {
    constructor()
    engineGenExemptionBlob(): number[];
    engineGenExemptionBlob(arg0: number[], arg1: number): number;
    engineGetOutputSize(arg0: number): number;
    engineInit(arg0: Key): void;
    engineInit(arg0: Key, arg1: AlgorithmParameters): void;
    engineInit(arg0: Key, arg1: AlgorithmParameterSpec): void;
}