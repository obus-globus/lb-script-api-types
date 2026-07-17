import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlImage } from '../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { GlSampler } from '../../../../net/irisshaders/iris/gl/sampler/GlSampler.d.ts'
import type { SamplerHolder } from '../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { TextureAccess } from '../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { RenderTargets } from '../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class IrisSamplers extends Object {
    static ALBEDO_TEXTURE_UNIT: number;
    static COMPOSITE_RESERVED_TEXTURE_UNITS: number[];
    static LIGHTMAP_TEXTURE_UNIT: number;
    static OVERLAY_TEXTURE_UNIT: number;
    static SODIUM_RESERVED_TEXTURE_UNITS: number[];
    static WORLD_RESERVED_TEXTURE_UNITS: number[];
    static addCompositeSamplers(paramarg0: SamplerHolder, paramarg1: RenderTargets): void;
    static addCustomImages(paramarg0: SamplerHolder, paramarg1: GlImage[]): void;
    static addCustomTextures(paramarg0: SamplerHolder, paramarg1: JavaMap<string, TextureAccess>): void;
    static addLevelSamplers(paramarg0: SamplerHolder, paramarg1: WorldRenderingPipeline, paramarg2: AbstractTexture, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean): void;
    static addNoiseSampler(paramarg0: SamplerHolder, paramarg1: TextureAccess): void;
    static addRenderTargetSamplers(paramarg0: SamplerHolder, paramarg1: () => number[], paramarg2: RenderTargets, paramarg3: boolean, paramarg4: WorldRenderingPipeline): void;
    static addShadowSamplers(paramarg0: SamplerHolder, paramarg1: ShadowRenderTargets, paramarg2: number[], paramarg3: boolean): boolean;
    static addWorldDepthSamplers(paramarg0: SamplerHolder, paramarg1: RenderTargets): void;
    static getTerrainCache(paramarg0: number): GpuSampler;
    static getTerrainCacheIris(paramarg0: number): GlSampler;
    static hasPBRSamplers(paramarg0: SamplerHolder): boolean;
    static hasShadowSamplers(paramarg0: SamplerHolder): boolean;
    static initRenderer(): void;
    private constructor()
}