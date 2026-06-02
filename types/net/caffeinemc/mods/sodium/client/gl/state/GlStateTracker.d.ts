import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlVertexArray } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/array/GlVertexArray.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlBufferTarget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferTarget.d.ts'
export class GlStateTracker extends Object {
    constructor()
    // private bufferState: number[];
    // private vertexArrayState: number;
    clear(): void;
    makeBufferActive(arg0: GlBufferTarget, arg1: GlBuffer): boolean;
    makeVertexArrayActive(arg0: GlVertexArray): boolean;
    notifyBufferDeleted(arg0: GlBuffer): void;
    notifyVertexArrayDeleted(arg0: GlVertexArray): void;
}