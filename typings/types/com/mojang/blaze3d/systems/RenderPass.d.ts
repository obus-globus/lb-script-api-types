import type { IndexType } from '../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { DeviceFeatures } from '../../../../com/mojang/blaze3d/systems/DeviceFeatures.d.ts'
import type { DeviceLimits } from '../../../../com/mojang/blaze3d/systems/DeviceLimits.d.ts'
import type { GpuDeviceBackend } from '../../../../com/mojang/blaze3d/systems/GpuDeviceBackend.d.ts'
import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { RenderPass$Draw } from '../../../../com/mojang/blaze3d/systems/RenderPass$Draw.d.ts'
import type { RenderPass$RenderArea } from '../../../../com/mojang/blaze3d/systems/RenderPass$RenderArea.d.ts'
import type { RenderPassBackend } from '../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { RenderPassDescriptor$Attachment } from '../../../../com/mojang/blaze3d/systems/RenderPassDescriptor$Attachment.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderPassAccessor } from '../../../../net/caffeinemc/mods/sodium/mixin/core/RenderPassAccessor.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
import type { RenderPassInterface } from '../../../../net/irisshaders/iris/mixinterface/RenderPassInterface.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
export class RenderPass extends Object implements AutoCloseable, RenderPassAccessor, RenderPassInterface {
    static MAX_VERTEX_BUFFERS: number;
    constructor(backend: RenderPassBackend, device: GpuDeviceBackend, colorAttachments: RenderPassDescriptor$Attachment<Optional<Vector4fc>>[], onFinish: () => void, renderArea: RenderPass$RenderArea)
    readonly backend: RenderPassBackend;
    // private colorAttachments: RenderPassDescriptor$Attachment<Optional<Vector4fc>>[];
    // private device: GpuDeviceBackend;
    // private deviceFeatures: DeviceFeatures;
    // private deviceLimits: DeviceLimits;
    // private isClosed: boolean;
    // private onFinish: () => void;
    // private pushedDebugGroups: number;
    // private renderArea: RenderPass$RenderArea;
    bindTexture(name: string, textureView: GpuTextureView, sampler: GpuSampler): void;
    close(): void;
    disableScissor(): void;
    draw(vertexCount: number, instanceCount: number, firstVertex: number, firstInstance: number): void;
    drawIndexed(indexCount: number, instanceCount: number, firstIndex: number, vertexOffset: number, firstInstance: number): void;
    drawIndexedIndirect(commands: GpuBufferSlice, drawCount: number): void;
    drawIndirect(commands: GpuBufferSlice, drawCount: number): void;
    drawMultipleIndexed<T extends unknown>(draws: RenderPass$Draw<T>[], defaultIndexBuffer: GpuBuffer, defaultIndexType: IndexType, dynamicUniforms: string[], uniformArgument: T): void;
    enableScissor(x: number, y: number, width: number, height: number): void;
    getBackend(): RenderPassBackend;
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