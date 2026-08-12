import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { BlendFunction } from '../../../../com/mojang/blaze3d/pipeline/BlendFunction.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPipeline$Builder } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientRenderPipelines extends Object {
    static Blend: RenderPipeline;
    static ChamsImage: RenderPipeline;
    static FontMaskQuads: RenderPipeline;
    static GuiBlurH: RenderPipeline;
    static GuiBlurV: RenderPipeline;
    static INSTANCE: ClientRenderPipelines;
    static ItemChams: RenderPipeline;
    static LineStrip: RenderPipeline;
    /**
     * @see RenderPipelines.LINES_TRANSLUCENT
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L226 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:226}
     */
    static LinesWithWidth: RenderPipeline;
    /**
     * @see RenderPipelines.ENTITY_OUTLINE_BLIT
     * @see RenderPipelines.OUTLINE_SNIPPET
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L451 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:451}
     */
    static Outline: RenderPipeline;
    static lines(noDepthTest: boolean): RenderPipeline;
    static outlineQuads(useColor: boolean): RenderPipeline;
    static quads(noDepthTest: boolean): RenderPipeline;
    static relativeLines(useColor: boolean): RenderPipeline;
    static relativeQuads(useColor: boolean): RenderPipeline;
    static texQuads(noDepthTest: boolean): RenderPipeline;
    static triangleStrip(noDepthTest: boolean): RenderPipeline;
    static triangles(noDepthTest: boolean): RenderPipeline;
    Blend: RenderPipeline;
    ChamsImage: RenderPipeline;
    FontMaskQuads: RenderPipeline;
    // private GradientCircle: RenderPipeline;
    // private GradientCircleNoDepthTest: RenderPipeline;
    GuiBlurH: RenderPipeline;
    GuiBlurV: RenderPipeline;
    // private Heart: RenderPipeline;
    // private HeartNoDepthTest: RenderPipeline;
    ItemChams: RenderPipeline;
    // private JCEF_COMPATIBLE_BLEND: BlendFunction;
    LineStrip: RenderPipeline;
    // private Lines: RenderPipeline;
    // private LinesDepthTested: RenderPipeline;
    // private LinesRelativeToCamera: RenderPipeline;
    // private LinesRelativeToCameraNoColor: RenderPipeline;
    LinesWithWidth: RenderPipeline;
    Outline: RenderPipeline;
    // private OutlineQuads: RenderPipeline;
    // private OutlineQuadsNoColor: RenderPipeline;
    // private Quads: RenderPipeline;
    // private QuadsDepthTested: RenderPipeline;
    // private QuadsRelativeToCamera: RenderPipeline;
    // private QuadsRelativeToCameraNoColor: RenderPipeline;
    // private RoundedRect: RenderPipeline;
    // private RoundedRectNoDepthTest: RenderPipeline;
    // private TexQuads: RenderPipeline;
    // private TexQuadsDepthTested: RenderPipeline;
    // private TriangleStrip: RenderPipeline;
    // private TriangleStripNoDepthTest: RenderPipeline;
    // private Triangles: RenderPipeline;
    // private TrianglesDepthTested: RenderPipeline;
    // private renderPipelines: JavaMap<Identifier, RenderPipeline>;
    gradientCircle(noDepthTest: boolean): RenderPipeline;
    heart(noDepthTest: boolean): RenderPipeline;
    lines(noDepthTest: boolean): RenderPipeline;
    newPipeline(name: string, builderAction: (param0: RenderPipeline$Builder) => void): RenderPipeline;
    outlineQuads(useColor: boolean): RenderPipeline;
    /**
     * Precompile
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L538 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:538}
     */
    precompile(): void;
    quads(noDepthTest: boolean): RenderPipeline;
    relativeLines(useColor: boolean): RenderPipeline;
    relativeQuads(useColor: boolean): RenderPipeline;
    roundedRect(noDepthTest: boolean): RenderPipeline;
    texQuads(noDepthTest: boolean): RenderPipeline;
    triangleStrip(noDepthTest: boolean): RenderPipeline;
    triangles(noDepthTest: boolean): RenderPipeline;
}