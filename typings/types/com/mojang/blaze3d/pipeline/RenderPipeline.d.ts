import type { ColorTargetState } from '../../../../com/mojang/blaze3d/pipeline/ColorTargetState.d.ts'
import type { DepthStencilState } from '../../../../com/mojang/blaze3d/pipeline/DepthStencilState.d.ts'
import type { RenderPipeline$Builder } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Builder.d.ts'
import type { RenderPipeline$UniformDescription } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline$UniformDescription.d.ts'
import type { PolygonMode } from '../../../../com/mojang/blaze3d/platform/PolygonMode.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricRenderPipeline } from '../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderPipeline.d.ts'
import type { FabricRenderPipelineImpl } from '../../../../net/fabricmc/fabric/impl/client/rendering/FabricRenderPipelineImpl.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RenderPipeline extends Object implements FabricRenderPipeline, FabricRenderPipelineImpl {
    static builder(paramsnippets: (Object | null)[]): RenderPipeline$Builder;
    static updateSortKeySeed(): void;
    constructor(location: Identifier, vertexShader: Identifier, fragmentShader: Identifier, shaderDefines: ShaderDefines, samplers: string[], uniforms: RenderPipeline$UniformDescription[], colorTargetState: ColorTargetState, depthStencilState: DepthStencilState, polygonMode: PolygonMode, cull: boolean, vertexFormat: VertexFormat, vertexFormatMode: VertexFormat$Mode, sortKey: number)
    readonly colorTargetState: ColorTargetState;
    readonly cull: boolean;
    readonly depthStencilState: DepthStencilState;
    readonly fragmentShader: Identifier;
    readonly location: Identifier;
    readonly polygonMode: PolygonMode;
    readonly samplers: string[];
    readonly shaderDefines: ShaderDefines;
    readonly sortKey: number;
    readonly uniforms: RenderPipeline$UniformDescription[];
    // private usePipelineDrawModeForGui: boolean;
    readonly vertexFormat: VertexFormat;
    readonly vertexFormatMode: VertexFormat$Mode;
    readonly vertexShader: Identifier;
    fabric$setUsePipelineDrawModeForGuiSetter(arg0: boolean): void;
    getColorTargetState(): ColorTargetState;
    getDepthStencilState(): DepthStencilState;
    getFragmentShader(): Identifier;
    getLocation(): Identifier;
    getPolygonMode(): PolygonMode;
    getSamplers(): string[];
    getShaderDefines(): ShaderDefines;
    getSortKey(): number;
    getUniforms(): RenderPipeline$UniformDescription[];
    getVertexFormat(): VertexFormat;
    getVertexFormatMode(): VertexFormat$Mode;
    getVertexShader(): Identifier;
    isCull(): boolean;
    toString(): string;
    usePipelineDrawModeForGui(): boolean;
    usePipelineDrawModeForGui(): boolean;
    wantsDepthTexture(): boolean;
}