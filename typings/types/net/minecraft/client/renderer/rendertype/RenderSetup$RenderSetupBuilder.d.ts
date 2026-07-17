import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LayeringTransform } from '../../../../../net/minecraft/client/renderer/rendertype/LayeringTransform.d.ts'
import type { OutputTarget } from '../../../../../net/minecraft/client/renderer/rendertype/OutputTarget.d.ts'
import type { RenderSetup } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup.d.ts'
import type { RenderSetup$OutlineProperty } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$OutlineProperty.d.ts'
import type { RenderSetup$TextureBinding } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$TextureBinding.d.ts'
import type { TextureTransform } from '../../../../../net/minecraft/client/renderer/rendertype/TextureTransform.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderSetup$RenderSetupBuilder extends Object {
    private constructor(pipeline: RenderPipeline)
    // private affectsCrumbling: boolean;
    // private layeringTransform: LayeringTransform;
    // private outlineProperty: RenderSetup$OutlineProperty;
    // private outputTarget: OutputTarget;
    // private pipeline: RenderPipeline;
    // private sortOnUpload: boolean;
    // private textureTransform: TextureTransform;
    // private textures: JavaMap<string, RenderSetup$TextureBinding>;
    // private useLightmap: boolean;
    // private useOverlay: boolean;
    affectsCrumbling(): RenderSetup$RenderSetupBuilder;
    createRenderSetup(): RenderSetup;
    setLayeringTransform(layeringTransform: LayeringTransform): RenderSetup$RenderSetupBuilder;
    setOutline(outlineProperty: RenderSetup$OutlineProperty): RenderSetup$RenderSetupBuilder;
    setOutputTarget(outputTarget: OutputTarget): RenderSetup$RenderSetupBuilder;
    setTextureTransform(textureTransform: TextureTransform): RenderSetup$RenderSetupBuilder;
    sortOnUpload(): RenderSetup$RenderSetupBuilder;
    useLightmap(): RenderSetup$RenderSetupBuilder;
    useOverlay(): RenderSetup$RenderSetupBuilder;
    withTexture(name: string, texture: Identifier): RenderSetup$RenderSetupBuilder;
    withTexture(name: string, texture: Identifier, sampler: () => GpuSampler): RenderSetup$RenderSetupBuilder;
}