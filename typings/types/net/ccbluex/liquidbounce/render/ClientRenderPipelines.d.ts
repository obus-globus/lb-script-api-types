import type { BlendFunction } from '../../../../com/mojang/blaze3d/pipeline/BlendFunction.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPipeline$Builder } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientRenderPipelines extends Object {
    static Blend: RenderPipeline;
    static GuiBlur: RenderPipeline;
    static INSTANCE: ClientRenderPipelines;
    static ItemChams: RenderPipeline;
    static LineStrip: RenderPipeline;
    static Lines: RenderPipeline;
    /**
     * @see RenderPipelines.LINES_TRANSLUCENT
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L198 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:198}
     */
    static LinesWithWidth: RenderPipeline;
    /**
     * @see RenderPipelines.ENTITY_OUTLINE_BLIT
     * @see RenderPipelines.OUTLINE_SNIPPET
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L360 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:360}
     */
    static Outline: RenderPipeline;
    static Quads: RenderPipeline;
    static TexQuads: RenderPipeline;
    static Triangles: RenderPipeline;
    static outlineQuads(useColor: boolean): RenderPipeline;
    static relativeLines(useColor: boolean): RenderPipeline;
    static relativeQuads(useColor: boolean): RenderPipeline;
    static triangleStrip(noDepthTest: boolean): RenderPipeline;
    Blend: RenderPipeline;
    // private GradientCircle: RenderPipeline;
    // private GradientCircleNoDepthTest: RenderPipeline;
    GuiBlur: RenderPipeline;
    ItemChams: RenderPipeline;
    // private JCEF_COMPATIBLE_BLEND: BlendFunction;
    LineStrip: RenderPipeline;
    Lines: RenderPipeline;
    // private LinesRelativeToCamera: RenderPipeline;
    // private LinesRelativeToCameraNoColor: RenderPipeline;
    LinesWithWidth: RenderPipeline;
    Outline: RenderPipeline;
    // private OutlineQuads: RenderPipeline;
    // private OutlineQuadsNoColor: RenderPipeline;
    Quads: RenderPipeline;
    // private QuadsRelativeToCamera: RenderPipeline;
    // private QuadsRelativeToCameraNoColor: RenderPipeline;
    // private RoundedRect: RenderPipeline;
    // private RoundedRectNoDepthTest: RenderPipeline;
    TexQuads: RenderPipeline;
    // private TriangleStrip: RenderPipeline;
    // private TriangleStripNoDepthTest: RenderPipeline;
    Triangles: RenderPipeline;
    // private renderPipelines: Map<Identifier, RenderPipeline>;
    gradientCircle(noDepthTest: boolean): RenderPipeline;
    newPipeline(name: string, builderAction: (param0: RenderPipeline$Builder) => void): RenderPipeline;
    outlineQuads(useColor: boolean): RenderPipeline;
    /**
     * Precompile
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt#L411 | src/main/kotlin/net/ccbluex/liquidbounce/render/ClientRenderPipelines.kt:411}
     */
    precompile(): void;
    relativeLines(useColor: boolean): RenderPipeline;
    relativeQuads(useColor: boolean): RenderPipeline;
    roundedRect(noDepthTest: boolean): RenderPipeline;
    triangleStrip(noDepthTest: boolean): RenderPipeline;
}