import type { AsymmetricKey } from '../../java/security/AsymmetricKey.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PublicKey extends AsymmetricKey, Object{
    getAlgorithm(): string;
    getFormat(): string;
    getParams(): AlgorithmParameterSpec;
}