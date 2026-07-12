import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GpuBufferDeferredCloser$PendingClose } from '../../../../../net/ccbluex/liquidbounce/render/buffers/GpuBufferDeferredCloser$PendingClose.d.ts'
export class GpuBufferDeferredCloser extends Object implements AutoCloseable {
    constructor()
    constructor(arg0: (param0: GpuBuffer) => void)
    // private closeAction: (param0: GpuBuffer) => void;
    // private pendingClose: GpuBufferDeferredCloser$PendingClose[];
    add(arg0: GpuBuffer): void;
    add(arg0: GpuBuffer[]): void;
    close(): void;
    tryClose(): void;
}