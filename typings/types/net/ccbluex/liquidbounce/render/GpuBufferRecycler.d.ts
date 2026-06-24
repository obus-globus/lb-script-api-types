import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GpuBufferRecycler$PendingRecycle } from '../../../../net/ccbluex/liquidbounce/render/GpuBufferRecycler$PendingRecycle.d.ts'
export class GpuBufferRecycler extends Object {
    constructor(arg0: (param0: GpuBuffer) => void)
    // private closeAction: (param0: GpuBuffer) => void;
    // private pendingRecycle: GpuBufferRecycler$PendingRecycle[];
    add(arg0: GpuBuffer): void;
    tryClose(): void;
}