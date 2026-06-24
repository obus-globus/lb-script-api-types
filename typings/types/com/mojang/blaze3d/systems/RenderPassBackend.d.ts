import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPass$Draw } from '../../../../com/mojang/blaze3d/systems/RenderPass$Draw.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
import type { RenderPassInterface } from '../../../../net/irisshaders/iris/mixinterface/RenderPassInterface.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
export interface RenderPassBackend extends Object, RenderPassInterface {
    bindTexture(name: string, textureView: GpuTextureView, sampler: GpuSampler): void;
    disableScissor(): void;
    draw(vertexCount: number, instanceCount: number, firstVertex: number, firstInstance: number): void;
    drawIndexed(indexCount: number, instanceCount: number, firstIndex: number, vertexOffset: number, firstInstance: number): void;
    drawIndexedIndirect(commands: GpuBufferSlice, drawCount: number): void;
    drawIndirect(commands: GpuBufferSlice, drawCount: number): void;
    drawMultipleIndexed<T extends unknown>(draws: RenderPass$Draw<T>[], defaultIndexBuffer: GpuBuffer, defaultIndexType: IndexType, dynamicUniforms: string[], uniformArgument: T): void;
    enableScissor(x: number, y: number, width: number, height: number): void;
    iris$getCustomPass(): CustomPass;
    iris$setCustomPass(arg0: CustomPass): void;
    multiDraw(firstVertices: IntBuffer, vertexCounts: IntBuffer, drawCount: number): void;
    multiDraw(drawParameters: IntBuffer, instanceCount: number, firstInstance: number, drawCount: number): void;
    multiDrawIndexed(drawParameters: IntBuffer, instanceCount: number, firstInstance: number, drawCount: number): void;
    multiDrawIndexed(firstIndexOffsets: PointerBuffer, indexCounts: IntBuffer, vertexOffsets: IntBuffer, drawCount: number): void;
    popDebugGroup(): void;
    pushDebugGroup(label: () => string): void;
    setIndexBuffer(indexBuffer: GpuBuffer, indexType: IndexType): void;
    setPipeline(pipeline: RenderPipeline): void;
    setUniform(name: string, value: GpuBuffer): void;
    setUniform(name: string, value: GpuBufferSlice): void;
    setVertexBuffer(slot: number, vertexBuffer: GpuBufferSlice): void;
    writeTimestamp(pool: GpuQueryPool, index: number): void;
}