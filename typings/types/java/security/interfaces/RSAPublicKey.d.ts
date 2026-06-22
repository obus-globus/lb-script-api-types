import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { PublicKey } from '../../../java/security/PublicKey.d.ts'
import type { RSAKey } from '../../../java/security/interfaces/RSAKey.d.ts'
import type { AlgorithmParameterSpec } from '../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RSAPublicKey extends PublicKey, RSAKey, Object{
    getAlgorithm(): string;
    getFormat(): string;
    getModulus(): BigInteger;
    getParams(): AlgorithmParameterSpec;
    getPublicExponent(): BigInteger;
}