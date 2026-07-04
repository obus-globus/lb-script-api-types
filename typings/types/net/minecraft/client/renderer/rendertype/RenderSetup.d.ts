import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { SamplerCache } from '../../../../../com/mojang/blaze3d/systems/SamplerCache.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinRenderSetupAccessor } from '../../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/render/MixinRenderSetupAccessor.d.ts'
import type { LayeringTransform } from '../../../../../net/minecraft/client/renderer/rendertype/LayeringTransform.d.ts'
import type { OutputTarget } from '../../../../../net/minecraft/client/renderer/rendertype/OutputTarget.d.ts'
import type { PreparedRenderType$Texture } from '../../../../../net/minecraft/client/renderer/rendertype/PreparedRenderType$Texture.d.ts'
import type { RenderSetup$OutlineProperty } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$OutlineProperty.d.ts'
import type { RenderSetup$RenderSetupBuilder } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$RenderSetupBuilder.d.ts'
import type { RenderSetup$TextureBinding } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$TextureBinding.d.ts'
import type { TextureTransform } from '../../../../../net/minecraft/client/renderer/rendertype/TextureTransform.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
export class RenderSetup extends Object implements MixinRenderSetupAccessor {
    static builder(parampipeline: RenderPipeline): RenderSetup$RenderSetupBuilder;
    static liquid_bounce$invokeInit(paramarg0: RenderPipeline, paramarg1: { [key: string]: Object }, paramarg2: boolean, paramarg3: boolean, paramarg4: LayeringTransform, paramarg5: OutputTarget, paramarg6: TextureTransform, paramarg7: RenderSetup$OutlineProperty, paramarg8: boolean, paramarg9: boolean): RenderSetup;
    private constructor(pipeline: RenderPipeline, textures: { [key: string]: RenderSetup$TextureBinding }, useLightmap: boolean, useOverlay: boolean, layeringTransform: LayeringTransform, outputTarget: OutputTarget, textureTransform: TextureTransform, outlineProperty: RenderSetup$OutlineProperty, affectsCrumbling: boolean, sortOnUpload: boolean)
    readonly affectsCrumbling: boolean;
    readonly layeringTransform: LayeringTransform;
    readonly outlineProperty: RenderSetup$OutlineProperty;
    outputTarget: OutputTarget;
    readonly pipeline: RenderPipeline;
    readonly sortOnUpload: boolean;
    readonly textureTransform: TextureTransform;
    readonly textures: { [key: string]: RenderSetup$TextureBinding };
    readonly useLightmap: boolean;
    readonly useOverlay: boolean;
    getAffectsCrumbling(): boolean;
    getLayeringTransform(): LayeringTransform;
    getOutlineProperty(): RenderSetup$OutlineProperty;
    getPipeline(): RenderPipeline;
    getSortOnUpload(): boolean;
    getTextureTransform(): TextureTransform;
    getUseLightmap(): boolean;
    getUseOverlay(): boolean;
    prepareTextures(textureManager: TextureManager, samplerCache: SamplerCache, overlayTexture: GpuTextureView, lightmapTexture: GpuTextureView): PreparedRenderType$Texture[];
    toString(): string;
}