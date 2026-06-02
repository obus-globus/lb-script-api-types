import type { CommandEncoder } from '../../../../com/mojang/blaze3d/systems/CommandEncoder.d.ts'
import type { GpuQuery } from '../../../../com/mojang/blaze3d/systems/GpuQuery.d.ts'
import type { TimerQuery$FrameProfile } from '../../../../com/mojang/blaze3d/systems/TimerQuery$FrameProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimerQuery extends Object {
    static getInstance(): TimerQuery;
    constructor()
    // private activeEncoder: CommandEncoder;
    // private activeGpuQuery: GpuQuery;
    beginProfile(): void;
    endProfile(): TimerQuery$FrameProfile;
    isRecording(): boolean;
}