import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Std140Builder } from '../../../../../com/mojang/blaze3d/buffers/Std140Builder.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientUniformDefine } from '../../../../../net/ccbluex/liquidbounce/render/ClientUniformDefine.d.ts'
import type { MappableRingBuffer } from '../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
/**
 * Retains the last uniform slice across frames and uploads a new one only when {@link T} changes.
 *
 * The backing ring buffer prevents an update from overwriting data still consumed by the GPU.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/CachedUniform.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/render/buffers/CachedUniform.kt:32}
 */
export class CachedUniform<T extends unknown> extends Object implements AutoCloseable {
    constructor(define: ClientUniformDefine, writer: (param0: Std140Builder, param1: T) => void)
    // private buffers: MappableRingBuffer;
    // private currentSlice: GpuBufferSlice | null;
    // private lastValue: T | null;
    // private writer: (param0: Std140Builder, param1: T) => void;
    close(): void;
    get(value: T): GpuBufferSlice;
}