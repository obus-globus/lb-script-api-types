import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { SecureRandom } from '../../java/security/SecureRandom.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class CipherSpi extends Object {
    constructor()
    // private bufferCrypt(arg0: ByteBuffer, arg1: ByteBuffer, arg2: boolean): number;
    engineDoFinal(arg0: ByteBuffer, arg1: ByteBuffer): number;
    engineDoFinal(arg0: number[], arg1: number, arg2: number): number[];
    engineDoFinal(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
    engineGetBlockSize(): number;
    engineGetIV(): number[];
    engineGetKeySize(arg0: Key): number;
    engineGetOutputSize(arg0: number): number;
    engineGetParameters(): AlgorithmParameters;
    engineInit(arg0: number, arg1: Key, arg2: AlgorithmParameters, arg3: SecureRandom): void;
    engineInit(arg0: number, arg1: Key, arg2: SecureRandom): void;
    engineInit(arg0: number, arg1: Key, arg2: AlgorithmParameterSpec, arg3: SecureRandom): void;
    engineSetMode(arg0: string): void;
    engineSetPadding(arg0: string): void;
    engineUnwrap(arg0: number[], arg1: string, arg2: number): Key;
    engineUpdate(arg0: ByteBuffer, arg1: ByteBuffer): number;
    engineUpdate(arg0: number[], arg1: number, arg2: number): number[];
    engineUpdate(arg0: number[], arg1: number, arg2: number, arg3: number[], arg4: number): number;
    engineUpdateAAD(arg0: ByteBuffer): void;
    engineUpdateAAD(arg0: number[], arg1: number, arg2: number): void;
    engineWrap(arg0: Key): number[];
}