import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientRenderPipelines$GUI extends Object {
    static FontMask: RenderPipeline;
    static INSTANCE: ClientRenderPipelines$GUI;
    static TexQuadNoCull: RenderPipeline;
    static circleLut(): RenderPipeline;
    static lines(cull: boolean): RenderPipeline;
    static roundedRect(): RenderPipeline;
    static triangles(cull: boolean): RenderPipeline;
    // private CircleLut: RenderPipeline;
    FontMask: RenderPipeline;
    // private Lines: RenderPipeline;
    // private LinesNoCull: RenderPipeline;
    // private RoundedRect: RenderPipeline;
    TexQuadNoCull: RenderPipeline;
    // private Triangles: RenderPipeline;
    // private TrianglesNoCull: RenderPipeline;
    circleLut(): RenderPipeline;
    lines(cull: boolean): RenderPipeline;
    roundedRect(): RenderPipeline;
    triangles(cull: boolean): RenderPipeline;
}