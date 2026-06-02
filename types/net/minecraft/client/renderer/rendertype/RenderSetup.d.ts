import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinRenderSetupAccessor } from '../../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/render/MixinRenderSetupAccessor.d.ts'
import type { LayeringTransform } from '../../../../../net/minecraft/client/renderer/rendertype/LayeringTransform.d.ts'
import type { OutputTarget } from '../../../../../net/minecraft/client/renderer/rendertype/OutputTarget.d.ts'
import type { RenderSetup$OutlineProperty } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$OutlineProperty.d.ts'
import type { RenderSetup$RenderSetupBuilder } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$RenderSetupBuilder.d.ts'
import type { RenderSetup$TextureAndSampler } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$TextureAndSampler.d.ts'
import type { RenderSetup$TextureBinding } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$TextureBinding.d.ts'
import type { TextureTransform } from '../../../../../net/minecraft/client/renderer/rendertype/TextureTransform.d.ts'
export class RenderSetup extends Object implements MixinRenderSetupAccessor {
    static builder(parampipeline: RenderPipeline): RenderSetup$RenderSetupBuilder;
    private constructor(pipeline: RenderPipeline, textures: { [key: string]: RenderSetup$TextureBinding }, useLightmap: boolean, useOverlay: boolean, layeringTransform: LayeringTransform, outputTarget: OutputTarget, textureTransform: TextureTransform, outlineProperty: RenderSetup$OutlineProperty, affectsCrumbling: boolean, sortOnUpload: boolean, bufferSize: number)
    // private affectsCrumbling: boolean;
    // private bufferSize: number;
    // private layeringTransform: LayeringTransform;
    readonly outlineProperty: RenderSetup$OutlineProperty;
    outputTarget: OutputTarget;
    pipeline: RenderPipeline;
    // private sortOnUpload: boolean;
    // private textureTransform: TextureTransform;
    readonly textures: { [key: string]: RenderSetup$TextureBinding };
    // private useLightmap: boolean;
    // private useOverlay: boolean;
    getTextures(): { [key: string]: RenderSetup$TextureAndSampler };
    toString(): string;
}