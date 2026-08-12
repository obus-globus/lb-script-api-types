import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GpuBufferAvailableCache } from '../../../../../net/ccbluex/liquidbounce/render/buffers/GpuBufferAvailableCache.d.ts'
import type { GpuBufferDeferredCloser } from '../../../../../net/ccbluex/liquidbounce/render/buffers/GpuBufferDeferredCloser.d.ts'
/**
 * Reuses dynamic GPU buffers after the frame that referenced them has completed on the GPU.
 *
 * A pool is owned by one {@link DynamicGpuBufferWriter}. All buffers retired during a frame share
 * one fence, which is created immediately before vanilla submits the frame command buffer.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/FrameGpuBufferPool.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/FrameGpuBufferPool.kt:32}
 */
export class FrameGpuBufferPool extends Object implements AutoCloseable {
    constructor(label: string, usage: number, maxAvailableBuffers: number)
    // private available: GpuBufferAvailableCache;
    // private closed: boolean;
    // private closer: GpuBufferDeferredCloser;
    // private label: string;
    // private maxAvailableBuffers: number;
    // private usage: number;
    // private usedThisFrame: GpuBuffer[];
    acquire(minCapacity: number): GpuBuffer;
    close(): void;
    /**
     * Recycles completed frames and fences all buffers used by the current frame.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/FrameGpuBufferPool.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/FrameGpuBufferPool.kt:67}
     */
    endFrame(minReusableCapacity: number): void;
    // private recycleCompleted(minReusableCapacity: number): void;
    retireCurrentFrame(buffer: GpuBuffer): void;
}