import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
/**
 * Buffer grouping key used by {@link BatchCollector}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:100}
 */
export class RenderBufferKey extends Record {
    constructor(pipeline: RenderPipeline, textures: { [key: string]: AbstractTexture }, uniforms: { [key: string]: GpuBufferSlice })
    // private pipeline: RenderPipeline;
    /*not mapped: */ pipeline(): RenderPipeline;
    // private textures: { [key: string]: AbstractTexture };
    /*not mapped: */ textures(): { [key: string]: AbstractTexture };
    // private uniforms: { [key: string]: GpuBufferSlice };
    /*not mapped: */ uniforms(): { [key: string]: GpuBufferSlice };
    component1(): RenderPipeline;
    component2(): { [key: string]: AbstractTexture };
    component3(): { [key: string]: GpuBufferSlice };
    copy(pipeline: RenderPipeline, textures: { [key: string]: AbstractTexture }, uniforms: { [key: string]: GpuBufferSlice }): RenderBufferKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}