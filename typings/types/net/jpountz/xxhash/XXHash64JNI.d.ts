import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { XXHash64 } from '../../../net/jpountz/xxhash/XXHash64.d.ts'
export class XXHash64JNI extends XXHash64 {
    static INSTANCE: XXHash64;
    constructor()
    hash(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number): number;
    hash(arg0: ByteBuffer, arg1: number): number;
    hash(arg0: number[], arg1: number, arg2: number, arg3: number): number;
}