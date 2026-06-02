import type { Key } from '../../java/security/Key.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { SecretKey } from '../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class KeyAgreementSpi extends Object {
    constructor()
    engineDoPhase(arg0: Key, arg1: boolean): Key;
    engineGenerateSecret(): number[];
    engineGenerateSecret(arg0: number[], arg1: number): number;
    engineGenerateSecret(arg0: string): SecretKey;
    engineInit(arg0: Key, arg1: SecureRandom): void;
    engineInit(arg0: Key, arg1: AlgorithmParameterSpec, arg2: SecureRandom): void;
}