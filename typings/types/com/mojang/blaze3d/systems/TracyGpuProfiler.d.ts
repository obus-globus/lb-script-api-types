import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuDevice } from '../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { GpuContext } from '../../../../com/mojang/jtracy/GpuContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TracyGpuProfiler extends Object {
    constructor(device: GpuDevice)
    // private context: GpuContext;
    // private head: number;
    // private queries: GpuQueryPool;
    // private tail: number;
    close(): void;
    endFrame(): void;
    // private nextQueryId(): number;
    popZone(encoder: CommandEncoder): void;
    pushZone(encoder: CommandEncoder, name: string): void;
}