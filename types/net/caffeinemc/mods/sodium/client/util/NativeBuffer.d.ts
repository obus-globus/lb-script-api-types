import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NativeBuffer$BufferReference } from '../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer$BufferReference.d.ts'
export class NativeBuffer extends Object {
    static copy(paramarg0: ByteBuffer): NativeBuffer;
    static getTotalAllocated(): number;
    static reclaim(paramarg0: boolean): void;
    constructor(arg0: number)
    // private ref: NativeBuffer$BufferReference;
    free(): void;
    getDirectBuffer(): ByteBuffer;
    getLength(): number;
}