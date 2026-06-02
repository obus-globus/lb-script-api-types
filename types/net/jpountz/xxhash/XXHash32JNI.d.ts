import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { XXHash32 } from '../../../net/jpountz/xxhash/XXHash32.d.ts'
export class XXHash32JNI extends XXHash32 {
    static INSTANCE: XXHash32;
    constructor()
    hash(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number): number;
    hash(arg0: number[], arg1: number, arg2: number, arg3: number): number;
}