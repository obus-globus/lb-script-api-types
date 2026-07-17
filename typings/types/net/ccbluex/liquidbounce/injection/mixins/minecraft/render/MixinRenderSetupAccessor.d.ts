import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { RenderPipeline } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayeringTransform } from '../../../../../../../net/minecraft/client/renderer/rendertype/LayeringTransform.d.ts'
import type { RenderSetup$OutlineProperty } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderSetup$OutlineProperty.d.ts'
import type { TextureTransform } from '../../../../../../../net/minecraft/client/renderer/rendertype/TextureTransform.d.ts'
export interface MixinRenderSetupAccessor extends Object{
    getAffectsCrumbling(): boolean;
    getLayeringTransform(): LayeringTransform;
    getOutlineProperty(): RenderSetup$OutlineProperty;
    getPipeline(): RenderPipeline;
    getSortOnUpload(): boolean;
    getTextureTransform(): TextureTransform;
    getTextures(): JavaMap<string, Object>;
    getUseLightmap(): boolean;
    getUseOverlay(): boolean;
}