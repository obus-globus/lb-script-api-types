import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
export class GlBufferMapping extends Object {
    constructor(arg0: GlBuffer, arg1: ByteBuffer)
    // private buffer: GlBuffer;
    disposed: boolean;
    // private map: ByteBuffer;
    dispose(): void;
    getBufferObject(): GlBuffer;
    getMemoryBuffer(): ByteBuffer;
    isDisposed(): boolean;
    write(arg0: ByteBuffer, arg1: number): void;
}