import type { KeyPair } from '../../java/security/KeyPair.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class KeyPairGeneratorSpi extends Object {
    constructor()
    generateKeyPair(): KeyPair;
    initialize(arg0: AlgorithmParameterSpec, arg1: SecureRandom): void;
    initialize(arg0: number, arg1: SecureRandom): void;
}