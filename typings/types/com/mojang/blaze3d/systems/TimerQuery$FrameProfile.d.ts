import type { GpuQuery } from '../../../../com/mojang/blaze3d/systems/GpuQuery.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimerQuery$FrameProfile extends Object {
    private constructor(gpuQuery: GpuQuery)
    // private gpuQuery: GpuQuery;
    // private timerResult: number;
    cancel(): void;
    get(): number;
    isDone(): boolean;
}