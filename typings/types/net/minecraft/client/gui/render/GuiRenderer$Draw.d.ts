import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiRendererDrawAccessor } from '../../../../../net/fabricmc/fabric/mixin/client/rendering/GuiRendererDrawAccessor.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { StagedVertexBuffer$Draw } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer$Draw.d.ts'
export class GuiRenderer$Draw extends Record implements GuiRendererDrawAccessor {
    constructor(draw: StagedVertexBuffer$Draw, pipeline: RenderPipeline, textureSetup: TextureSetup, scissorArea: ScreenRectangle)
    // private draw: StagedVertexBuffer$Draw;
    // private pipeline: RenderPipeline;
    // private scissorArea: ScreenRectangle;
    // private textureSetup: TextureSetup;
    draw(): StagedVertexBuffer$Draw;
    equals(o: Object | null): boolean;
    fabric$Draw(): StagedVertexBuffer$Draw;
    fabric$pipeline(): RenderPipeline;
    hashCode(): number;
    pipeline(): RenderPipeline;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
}