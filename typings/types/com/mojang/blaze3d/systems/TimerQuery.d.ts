import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { TimerQuery$Status } from '../../../../com/mojang/blaze3d/systems/TimerQuery$Status.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimerQuery extends Object implements AutoCloseable {
    constructor()
    // private activeEncoder: CommandEncoder;
    // private currentRotationIndex: number;
    // private queryPool: GpuQueryPool;
    // private results: number[];
    readonly status: TimerQuery$Status;
    beginProfile(): void;
    close(): void;
    endProfile(): void;
    get(): number;
    getStatus(): TimerQuery$Status;
}