import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { VertexFormat$Mode } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DrawAccessor } from '../../../../../net/fabricmc/fabric/mixin/client/rendering/DrawAccessor.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
export class GuiRenderer$Draw extends Record implements DrawAccessor {
    // private baseVertex: number;
    // private indexCount: number;
    // private mode: VertexFormat$Mode;
    // private pipeline: RenderPipeline;
    // private scissorArea: ScreenRectangle;
    // private textureSetup: TextureSetup;
    // private vertexBuffer: GpuBuffer;
    baseVertex(): number;
    equals(o: Object | null): boolean;
    fabric$indexCount(): number;
    fabric$pipeline(): RenderPipeline;
    hashCode(): number;
    indexCount(): number;
    mode(): VertexFormat$Mode;
    pipeline(): RenderPipeline;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
    vertexBuffer(): GpuBuffer;
}