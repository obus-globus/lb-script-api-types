import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlMutableBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlMutableBuffer.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { SharedQuadIndexBuffer$IndexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/SharedQuadIndexBuffer$IndexType.d.ts'
import type { NativeBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export class SharedQuadIndexBuffer extends Object {
    static createIndexBuffer(paramarg0: SharedQuadIndexBuffer$IndexType, paramarg1: number): NativeBuffer;
    constructor(arg0: CommandList, arg1: SharedQuadIndexBuffer$IndexType)
    // private buffer: GlMutableBuffer;
    // private indexType: SharedQuadIndexBuffer$IndexType;
    // private maxPrimitives: number;
    delete(arg0: CommandList): void;
    ensureCapacity(arg0: CommandList, arg1: number): void;
    getBufferObject(): GlBuffer;
    // private getNextSize(arg0: number): number;
    // private grow(arg0: CommandList, arg1: number): void;
}