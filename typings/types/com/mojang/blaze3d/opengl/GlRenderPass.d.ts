import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GlCommandEncoder } from '../../../../com/mojang/blaze3d/opengl/GlCommandEncoder.d.ts'
import type { GlDevice } from '../../../../com/mojang/blaze3d/opengl/GlDevice.d.ts'
import type { GlRenderPass$TextureViewAndSampler } from '../../../../com/mojang/blaze3d/opengl/GlRenderPass$TextureViewAndSampler.d.ts'
import type { GlRenderPipeline } from '../../../../com/mojang/blaze3d/opengl/GlRenderPipeline.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { ScissorState } from '../../../../com/mojang/blaze3d/systems/ScissorState.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
import type { RenderPassInterface } from '../../../../net/irisshaders/iris/mixinterface/RenderPassInterface.d.ts'
export class GlRenderPass extends Object implements RenderPassBackend, RenderPassInterface {
    static VALIDATION: boolean;
    constructor(encoder: GlCommandEncoder, device: GlDevice, hasDepthTexture: boolean)
    readonly closed: boolean;
    // private device: GlDevice;
    // private dirtyUniforms: string[];
    // private encoder: GlCommandEncoder;
    // private hasDepthTexture: boolean;
    // private indexBuffer: GpuBuffer;
    // private indexType: VertexFormat$IndexType;
    // private iris$customPass: CustomPass;
    pipeline: GlRenderPipeline;
    samplers: { [key: string]: GlRenderPass$TextureViewAndSampler };
    // private scissorState: ScissorState;
    // private uniforms: { [key: string]: GpuBufferSlice };
    // private vertexBuffers: GpuBuffer[];
    bindTexture(name: string, textureView: GpuTextureView, sampler: GpuSampler): void;
    close(): void;
    disableScissor(): void;
    draw(firstVertex: number, vertexCount: number): void;
    drawIndexed(baseVertex: number, firstIndex: number, indexCount: number, instanceCount: number): void;
    drawMultipleIndexed<T extends Object | number | string | boolean>(draws: E[], defaultIndexBuffer: GpuBuffer, defaultIndexType: VertexFormat$IndexType, dynamicUniforms: E[], uniformArgument: T): void;
    enableScissor(x: number, y: number, width: number, height: number): void;
    getScissorHeight(): number;
    getScissorWidth(): number;
    getScissorX(): number;
    getScissorY(): number;
    hasDepthTexture(): boolean;
    iris$getCustomPass(): CustomPass;
    iris$getCustomPass(): CustomPass;
    iris$getCustomPass(): CustomPass;
    iris$setCustomPass(arg0: CustomPass): void;
    iris$setCustomPass(arg0: CustomPass): void;
    iris$setCustomPass(arg0: CustomPass): void;
    isClosed(): boolean;
    isScissorEnabled(): boolean;
    popDebugGroup(): void;
    pushDebugGroup(label: () => string): void;
    setIndexBuffer(indexBuffer: GpuBuffer, indexType: VertexFormat$IndexType): void;
    setPipeline(pipeline: RenderPipeline): void;
    setUniform(name: string, value: GpuBuffer): void;
    setUniform(name: string, value: GpuBufferSlice): void;
    setVertexBuffer(slot: number, vertexBuffer: GpuBuffer): void;
}