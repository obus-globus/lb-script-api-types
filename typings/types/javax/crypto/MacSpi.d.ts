import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class MacSpi extends Object {
    constructor()
    clone(): Object;
    engineDoFinal(): number[];
    engineGetMacLength(): number;
    engineInit(arg0: Key, arg1: AlgorithmParameterSpec): void;
    engineReset(): void;
    engineUpdate(arg0: ByteBuffer): void;
    engineUpdate(arg0: number): void;
    engineUpdate(arg0: number[], arg1: number, arg2: number): void;
}