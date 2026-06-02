import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class KeyGeneratorSpi extends Object {
    constructor()
    engineGenerateKey(): SecretKey;
    engineInit(arg0: SecureRandom): void;
    engineInit(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;
    engineInit(arg0: number, arg1: SecureRandom): void;
}