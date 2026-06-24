import type { PrimitiveTopology } from '../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { BindGroupLayout } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { ColorTargetState } from '../../../../com/mojang/blaze3d/pipeline/ColorTargetState.d.ts'
import type { DepthStencilState } from '../../../../com/mojang/blaze3d/pipeline/DepthStencilState.d.ts'
import type { RenderPipeline$Builder } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Builder.d.ts'
import type { PolygonMode } from '../../../../com/mojang/blaze3d/platform/PolygonMode.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRenderPipeline } from '../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderPipeline.d.ts'
import type { FabricRenderPipelineImpl } from '../../../../net/fabricmc/fabric/impl/client/rendering/FabricRenderPipelineImpl.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderPipeline extends Object implements FabricRenderPipeline, FabricRenderPipelineImpl {
    static builder(paramsnippets: (Object | null)[]): RenderPipeline$Builder;
    static updateSortKeySeed(): void;
    constructor(location: Identifier, vertexShader: Identifier, fragmentShader: Identifier, shaderDefines: ShaderDefines, bindGroupLayouts: BindGroupLayout[], colorTargetStates: ColorTargetState[], depthStencilState: DepthStencilState, polygonMode: PolygonMode, cull: boolean, vertexFormatPerBuffer: VertexFormat[], primitiveTopology: PrimitiveTopology, sortKey: number)
    readonly bindGroupLayouts: BindGroupLayout[];
    readonly colorTargetStates: ColorTargetState[];
    readonly cull: boolean;
    readonly depthStencilState: DepthStencilState;
    readonly fragmentShader: Identifier;
    readonly location: Identifier;
    readonly polygonMode: PolygonMode;
    readonly primitiveTopology: PrimitiveTopology;
    readonly shaderDefines: ShaderDefines;
    readonly sortKey: number;
    // private usePipelineDrawModeForGui: boolean;
    // private vertexFormatPerBuffer: VertexFormat[];
    readonly vertexShader: Identifier;
    fabric$setUsePipelineDrawModeForGuiSetter(arg0: boolean): void;
    getBindGroupLayouts(): BindGroupLayout[];
    getColorTargetState(): ColorTargetState;
    getColorTargetStates(): ColorTargetState[];
    getDepthStencilState(): DepthStencilState;
    getFragmentShader(): Identifier;
    getLocation(): Identifier;
    getPolygonMode(): PolygonMode;
    getPrimitiveTopology(): PrimitiveTopology;
    getShaderDefines(): ShaderDefines;
    getSortKey(): number;
    getVertexFormatBinding(bindingIndex: number): VertexFormat;
    getVertexFormatBindings(): VertexFormat[];
    getVertexShader(): Identifier;
    isCull(): boolean;
    toString(): string;
    usePipelineDrawModeForGui(): boolean;
    wantsDepthTexture(): boolean;
}