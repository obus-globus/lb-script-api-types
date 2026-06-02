import type { ColorTargetState } from '../../../../com/mojang/blaze3d/pipeline/ColorTargetState.d.ts'
import type { DepthStencilState } from '../../../../com/mojang/blaze3d/pipeline/DepthStencilState.d.ts'
import type { RenderPipeline$UniformDescription } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$UniformDescription.d.ts'
import type { PolygonMode } from '../../../../com/mojang/blaze3d/platform/PolygonMode.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRenderPipeline$Snippet } from '../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderPipeline$Snippet.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderPipeline$Snippet extends Record implements FabricRenderPipeline$Snippet {
    static withPipelineDrawModeForGui(paramarg0: RenderPipeline$Snippet, paramarg1: boolean): RenderPipeline$Snippet;
    static withoutPipelineDrawModeForGui(paramarg0: RenderPipeline$Snippet): RenderPipeline$Snippet;
    constructor(vertexShader: Optional<Identifier>, fragmentShader: Optional<Identifier>, shaderDefines: Optional<ShaderDefines>, samplers: Optional<string[]>, uniforms: Optional<RenderPipeline$UniformDescription[]>, colorTargetState: Optional<ColorTargetState>, depthStencilState: Optional<DepthStencilState>, polygonMode: Optional<PolygonMode>, cull: Optional<boolean>, vertexFormat: Optional<VertexFormat>, vertexFormatMode: Optional<VertexFormat$Mode>)
    // private colorTargetState: Optional<ColorTargetState>;
    // private cull: Optional<boolean>;
    // private depthStencilState: Optional<DepthStencilState>;
    // private fragmentShader: Optional<Identifier>;
    // private polygonMode: Optional<PolygonMode>;
    // private samplers: Optional<string[]>;
    // private shaderDefines: Optional<ShaderDefines>;
    // private uniforms: Optional<RenderPipeline$UniformDescription[]>;
    // private usePipelineDrawModeForGui: Optional<Object>;
    // private vertexFormat: Optional<VertexFormat>;
    // private vertexFormatMode: Optional<VertexFormat$Mode>;
    // private vertexShader: Optional<Identifier>;
    colorTargetState(): Optional<ColorTargetState>;
    cull(): Optional<boolean>;
    depthStencilState(): Optional<DepthStencilState>;
    equals(o: Object | null): boolean;
    fragmentShader(): Optional<Identifier>;
    hashCode(): number;
    polygonMode(): Optional<PolygonMode>;
    samplers(): Optional<string[]>;
    shaderDefines(): Optional<ShaderDefines>;
    toString(): string;
    uniforms(): Optional<RenderPipeline$UniformDescription[]>;
    usePipelineDrawModeForGui(): Optional<Object>;
    usePipelineDrawModeForGui(): Optional<boolean>;
    vertexFormat(): Optional<VertexFormat>;
    vertexFormatMode(): Optional<VertexFormat$Mode>;
    vertexShader(): Optional<Identifier>;
}