import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { RSAKey } from '../../../java/security/interfaces/RSAKey.d.ts'
import type { AlgorithmParameterSpec } from '../../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RSAPrivateKey extends PrivateKey, RSAKey, Object{
    getAlgorithm(): string;
    getFormat(): string;
    getModulus(): BigInteger;
    getParams(): AlgorithmParameterSpec;
    getPrivateExponent(): BigInteger;
}