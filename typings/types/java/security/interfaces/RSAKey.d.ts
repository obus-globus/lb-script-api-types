import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { AlgorithmParameterSpec } from '../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RSAKey extends Object{
    getModulus(): BigInteger;
    getParams(): AlgorithmParameterSpec;
}