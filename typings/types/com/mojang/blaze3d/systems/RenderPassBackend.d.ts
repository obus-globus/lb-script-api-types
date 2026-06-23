import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass$Draw } from '../../../../com/mojang/blaze3d/systems/RenderPass$Draw.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
import type { RenderPassInterface } from '../../../../net/irisshaders/iris/mixinterface/RenderPassInterface.d.ts'
export interface RenderPassBackend extends AutoCloseable, Object, RenderPassInterface {
    bindTexture(name: string, textureView: GpuTextureView, sampler: GpuSampler): void;
    close(): void;
    disableScissor(): void;
    draw(firstVertex: number, vertexCount: number): void;
    drawIndexed(baseVertex: number, firstIndex: number, indexCount: number, instanceCount: number): void;
    drawMultipleIndexed<T extends unknown>(draws: RenderPass$Draw<T>[], defaultIndexBuffer: GpuBuffer, defaultIndexType: VertexFormat$IndexType, dynamicUniforms: string[], uniformArgument: T): void;
    enableScissor(x: number, y: number, width: number, height: number): void;
    iris$getCustomPass(): CustomPass;
    iris$setCustomPass(arg0: CustomPass): void;
    isClosed(): boolean;
    popDebugGroup(): void;
    pushDebugGroup(label: () => string): void;
    setIndexBuffer(indexBuffer: GpuBuffer, indexType: VertexFormat$IndexType): void;
    setPipeline(pipeline: RenderPipeline): void;
    setUniform(name: string, value: GpuBuffer): void;
    setUniform(name: string, value: GpuBufferSlice): void;
    setVertexBuffer(slot: number, vertexBuffer: GpuBuffer): void;
}