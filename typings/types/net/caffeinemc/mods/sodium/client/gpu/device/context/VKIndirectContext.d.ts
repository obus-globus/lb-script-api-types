import type { GpuBufferSlice$MappedView } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { DrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
import type { VKDrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/VKDrawContext.d.ts'
import type { MappableRingBuffer } from '../../../../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
export class VKIndirectContext extends VKDrawContext {
    static PUSH_CONSTANT_RANGE: number;
    static create(): DrawContext;
    constructor()
    currentOffset: number;
    mappedView: GpuBufferSlice$MappedView;
    // private ringBuffer: MappableRingBuffer;
    delete(): void;
    endDraw(): void;
    rotate(): void;
}