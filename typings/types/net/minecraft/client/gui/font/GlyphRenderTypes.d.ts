import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class GlyphRenderTypes extends Record {
    static createForColorTexture(paramname: Identifier): GlyphRenderTypes;
    static createForIntensityTexture(paramname: Identifier): GlyphRenderTypes;
    constructor(normal: RenderType, seeThrough: RenderType, polygonOffset: RenderType, guiPipeline: RenderPipeline)
    // private guiPipeline: RenderPipeline;
    // private normal: RenderType;
    // private polygonOffset: RenderType;
    // private seeThrough: RenderType;
    equals(o: Object | null): boolean;
    guiPipeline(): RenderPipeline;
    hashCode(): number;
    normal(): RenderType;
    polygonOffset(): RenderType;
    seeThrough(): RenderType;
    select(mode: Font$DisplayMode): RenderType;
    // private select$mixinextras$wrapped$12(arg0: Font$DisplayMode): RenderType;
    toString(): string;
}