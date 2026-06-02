import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class XXHash32 extends Object {
    constructor()
    hash(arg0: ByteBuffer, arg1: number): number;
    hash(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number): number;
    hash(arg0: number[], arg1: number, arg2: number, arg3: number): number;
    toString(): string;
}