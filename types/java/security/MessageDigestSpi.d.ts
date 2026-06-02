import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class MessageDigestSpi extends Object {
    constructor()
    // private tempArray: number[];
    clone(): Object;
    engineDigest(): number[];
    engineDigest(arg0: number[], arg1: number, arg2: number): number;
    engineGetDigestLength(): number;
    engineReset(): void;
    engineUpdate(arg0: ByteBuffer): void;
    engineUpdate(arg0: number): void;
    engineUpdate(arg0: number[], arg1: number, arg2: number): void;
}