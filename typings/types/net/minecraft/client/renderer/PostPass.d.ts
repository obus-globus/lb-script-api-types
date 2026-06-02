import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { FrameGraphBuilder } from '../../../../com/mojang/blaze3d/framegraph/FrameGraphBuilder.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
import type { PostPass$Input } from '../../../../net/minecraft/client/renderer/PostPass$Input.d.ts'
import type { UniformValue } from '../../../../net/minecraft/client/renderer/UniformValue.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostPass extends Object implements AutoCloseable {
    constructor(pipeline: RenderPipeline, outputTargetId: Identifier, uniformGroups: { [key: string]: UniformValue[] }, inputs: PostPass$Input[])
    // private customUniforms: { [key: string]: GpuBuffer };
    // private infoUbo: MappableRingBuffer;
    // private inputs: PostPass$Input[];
    // private name: string;
    // private outputTargetId: Identifier;
    // private pipeline: RenderPipeline;
    addToFrame(frame: FrameGraphBuilder, targets: Map<Identifier, ResourceHandle<RenderTarget>>, shaderOrthoMatrix: GpuBufferSlice): void;
    close(): void;
}