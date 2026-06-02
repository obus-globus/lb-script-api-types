import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { PrivateKey } from '../../java/security/PrivateKey.d.ts'
import type { PublicKey } from '../../java/security/PublicKey.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class SignatureSpi extends Object {
    constructor()
    // private appRandom: SecureRandom;
    clone(): Object;
    engineGetParameter(arg0: string): Object;
    engineGetParameters(): AlgorithmParameters;
    engineInitSign(arg0: PrivateKey): void;
    engineInitSign(arg0: PrivateKey, arg1: SecureRandom): void;
    engineInitSign(arg0: PrivateKey, arg1: AlgorithmParameterSpec, arg2: SecureRandom): void;
    engineInitVerify(arg0: PublicKey): void;
    engineInitVerify(arg0: PublicKey, arg1: AlgorithmParameterSpec): void;
    engineSetParameter(arg0: AlgorithmParameterSpec): void;
    engineSetParameter(arg0: string, arg1: Object): void;
    engineSign(): number[];
    engineSign(arg0: number[], arg1: number, arg2: number): number;
    engineUpdate(arg0: ByteBuffer): void;
    engineUpdate(arg0: number): void;
    engineUpdate(arg0: number[], arg1: number, arg2: number): void;
    engineVerify(arg0: number[]): boolean;
    engineVerify(arg0: number[], arg1: number, arg2: number): boolean;
}