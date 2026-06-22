import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { PrivateKey } from '../../../java/security/PrivateKey.d.ts'
import type { ECKey } from '../../../java/security/interfaces/ECKey.d.ts'
import type { ECParameterSpec } from '../../../java/security/spec/ECParameterSpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ECPrivateKey extends PrivateKey, ECKey, Object{
    getAlgorithm(): string;
    getFormat(): string;
    getParams(): ECParameterSpec;
    getS(): BigInteger;
}