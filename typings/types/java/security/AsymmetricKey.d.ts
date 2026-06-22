import type { DEREncodable } from '../../java/security/DEREncodable.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AsymmetricKey extends DEREncodable, Key, Object{
    getAlgorithm(): string;
    getFormat(): string;
    getParams(): AlgorithmParameterSpec;
}