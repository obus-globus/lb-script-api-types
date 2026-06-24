import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { BindGroupLayout } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { ColorTargetState } from '../../../../com/mojang/blaze3d/pipeline/ColorTargetState.d.ts'
import type { DepthStencilState } from '../../../../com/mojang/blaze3d/pipeline/DepthStencilState.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPipeline$Snippet } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Snippet.d.ts'
import type { PolygonMode } from '../../../../com/mojang/blaze3d/platform/PolygonMode.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRenderPipeline$Builder } from '../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderPipeline$Builder.d.ts'
import type { ShaderDefines$Builder } from '../../../../net/minecraft/client/renderer/ShaderDefines$Builder.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderPipeline$Builder extends Object implements FabricRenderPipeline$Builder {
    constructor()
    // private activeColorTargetStateCount: number;
    // private bindGroupLayouts: Optional<BindGroupLayout[]>;
    // private colorTargetStates: ColorTargetState[];
    // private cull: Optional<boolean>;
    // private definesBuilder: Optional<ShaderDefines$Builder>;
    // private depthStencilState: Optional<DepthStencilState>;
    // private fragmentShader: Optional<Identifier>;
    // private location: Optional<Identifier>;
    // private polygonMode: Optional<PolygonMode>;
    // private primitiveTopology: Optional<PrimitiveTopology>;
    // private usePipelineDrawModeForGui: Optional<Object>;
    // private vertexFormatPerBuffer: VertexFormat[];
    // private vertexShader: Optional<Identifier>;
    build(): RenderPipeline;
    buildSnippet(): RenderPipeline$Snippet;
    withBindGroupLayout(bindGroupLayout: BindGroupLayout): RenderPipeline$Builder;
    withColorTargetState(colorTargetState: ColorTargetState): RenderPipeline$Builder;
    withColorTargetState(index: number, colorTargetState: ColorTargetState): RenderPipeline$Builder;
    withCull(cull: boolean): RenderPipeline$Builder;
    withDepthStencilState(depthStencilState: DepthStencilState): RenderPipeline$Builder;
    withDepthStencilState(depthStencilState: Optional<DepthStencilState>): RenderPipeline$Builder;
    withFragmentShader(fragmentShader: string): RenderPipeline$Builder;
    withFragmentShader(fragmentShader: Identifier): RenderPipeline$Builder;
    withLocation(location: string): RenderPipeline$Builder;
    withLocation(location: Identifier): RenderPipeline$Builder;
    withPolygonMode(polygonMode: PolygonMode): RenderPipeline$Builder;
    withPrimitiveTopology(primitiveTopology: PrimitiveTopology): RenderPipeline$Builder;
    withShaderDefine(key: string): RenderPipeline$Builder;
    withShaderDefine(key: string, value: number): RenderPipeline$Builder;
    withSnippet(snippet: RenderPipeline$Snippet): void;
    withUnusedColorTargetState(index: number): RenderPipeline$Builder;
    withUsePipelineDrawModeForGui(arg0: boolean): RenderPipeline$Builder;
    withVertexBinding(bindingIndex: number, vertexFormat: VertexFormat): RenderPipeline$Builder;
    withVertexShader(vertexShader: string): RenderPipeline$Builder;
    withVertexShader(vertexShader: Identifier): RenderPipeline$Builder;
    withoutUsePipelineDrawModeForGui(): RenderPipeline$Builder;
}