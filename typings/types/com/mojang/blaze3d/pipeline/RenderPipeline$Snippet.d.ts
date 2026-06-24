import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { BindGroupLayout } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { ColorTargetState } from '../../../../com/mojang/blaze3d/pipeline/ColorTargetState.d.ts'
import type { DepthStencilState } from '../../../../com/mojang/blaze3d/pipeline/DepthStencilState.d.ts'
import type { PolygonMode } from '../../../../com/mojang/blaze3d/platform/PolygonMode.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRenderPipeline$Snippet } from '../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderPipeline$Snippet.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderPipeline$Snippet extends Record implements FabricRenderPipeline$Snippet {
    static withPipelineDrawModeForGui(paramarg0: RenderPipeline$Snippet, paramarg1: boolean): RenderPipeline$Snippet;
    static withoutPipelineDrawModeForGui(paramarg0: RenderPipeline$Snippet): RenderPipeline$Snippet;
    constructor(vertexShader: Optional<Identifier>, fragmentShader: Optional<Identifier>, shaderDefines: Optional<ShaderDefines>, bindGroupLayouts: Optional<BindGroupLayout[]>, colorTargetStates: ColorTargetState[], activeColorTargetStateCount: number, depthStencilState: Optional<DepthStencilState>, polygonMode: Optional<PolygonMode>, cull: Optional<boolean>, vertexFormatPerBuffer: VertexFormat[], vertexFormatMode: Optional<PrimitiveTopology>)
    // private activeColorTargetStateCount: number;
    // private bindGroupLayouts: Optional<BindGroupLayout[]>;
    // private colorTargetStates: ColorTargetState[];
    // private cull: Optional<boolean>;
    // private depthStencilState: Optional<DepthStencilState>;
    // private fragmentShader: Optional<Identifier>;
    // private polygonMode: Optional<PolygonMode>;
    // private shaderDefines: Optional<ShaderDefines>;
    // private usePipelineDrawModeForGui: Optional<Object>;
    // private vertexFormatMode: Optional<PrimitiveTopology>;
    // private vertexFormatPerBuffer: VertexFormat[];
    // private vertexShader: Optional<Identifier>;
    activeColorTargetStateCount(): number;
    bindGroupLayouts(): Optional<BindGroupLayout[]>;
    colorTargetStates(): ColorTargetState[];
    cull(): Optional<boolean>;
    depthStencilState(): Optional<DepthStencilState>;
    equals(o: Object | null): boolean;
    fragmentShader(): Optional<Identifier>;
    hashCode(): number;
    polygonMode(): Optional<PolygonMode>;
    shaderDefines(): Optional<ShaderDefines>;
    toString(): string;
    usePipelineDrawModeForGui(): Optional<Object>;
    usePipelineDrawModeForGui(): Optional<boolean>;
    vertexFormatMode(): Optional<PrimitiveTopology>;
    vertexFormatPerBuffer(): VertexFormat[];
    vertexShader(): Optional<Identifier>;
}