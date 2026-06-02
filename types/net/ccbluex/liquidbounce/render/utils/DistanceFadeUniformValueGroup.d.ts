import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class DistanceFadeUniformValueGroup extends ValueGroup {
    constructor()
    readonly farEnd: number;
    readonly farStart: number;
    readonly nearEnd: number;
    readonly nearStart: number;
    // private ubo: GpuBufferSlice;
    // private uboDirty: boolean;
    bindUniform(pass: RenderPass): void;
    updateIfDirty(): void;
}