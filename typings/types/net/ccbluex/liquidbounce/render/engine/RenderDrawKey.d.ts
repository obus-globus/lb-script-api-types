import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class RenderDrawKey extends Record implements Comparable<RenderDrawKey> {
    static of(paramarg0: RenderPipeline): RenderDrawKey;
    static of(paramarg0: RenderPipeline, paramarg1: JavaMap<string, AbstractTexture>, paramarg2: JavaMap<string, GpuBufferSlice>): RenderDrawKey;
    constructor(pipeline: RenderPipeline, textures: JavaMap<string, AbstractTexture>, uniforms: JavaMap<string, GpuBufferSlice>)
    // private pipeline: RenderPipeline;
    // private textures: JavaMap<string, AbstractTexture>;
    // private uniforms: JavaMap<string, GpuBufferSlice>;
    compareTo(arg0: RenderDrawKey): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pipeline(): RenderPipeline;
    textures(): JavaMap<string, AbstractTexture>;
    toString(): string;
    uniforms(): JavaMap<string, GpuBufferSlice>;
}