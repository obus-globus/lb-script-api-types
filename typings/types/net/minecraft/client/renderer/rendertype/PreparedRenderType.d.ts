import type { IndexType } from '../../../../../com/mojang/blaze3d/IndexType.d.ts'
import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { ScissorState } from '../../../../../com/mojang/blaze3d/systems/ScissorState.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RenderingWrapper } from '../../../../../net/irisshaders/iris/layer/RenderingWrapper.d.ts'
import type { WrappedPreparedRenderType } from '../../../../../net/irisshaders/iris/layer/WrappedPreparedRenderType.d.ts'
import type { StagedVertexBuffer$ExecuteInfo } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer$ExecuteInfo.d.ts'
import type { OutputTarget } from '../../../../../net/minecraft/client/renderer/rendertype/OutputTarget.d.ts'
import type { PreparedRenderType$Texture } from '../../../../../net/minecraft/client/renderer/rendertype/PreparedRenderType$Texture.d.ts'
export class PreparedRenderType extends Record implements WrappedPreparedRenderType {
    constructor(pipeline: RenderPipeline, outputTarget: OutputTarget, dynamicTransforms: GpuBufferSlice, scissorState: ScissorState, textures: PreparedRenderType$Texture[])
    // private dynamicTransforms: GpuBufferSlice;
    // private outputTarget: OutputTarget;
    // private pipeline: RenderPipeline;
    // private scissorState: ScissorState;
    // private textures: PreparedRenderType$Texture[];
    // private wrapper: RenderingWrapper;
    drawFromBuffer(vertexBuffer: GpuBuffer, indexBuffer: GpuBuffer, indexType: IndexType, baseVertex: number, firstIndex: number, indexCount: number): void;
    drawFromBuffer(info: StagedVertexBuffer$ExecuteInfo): void;
    // private drawFromBuffer$mixinextras$wrapped$14(arg0: GpuBuffer, arg1: GpuBuffer, arg2: IndexType, arg3: number, arg4: number, arg5: number): void;
    dynamicTransforms(): GpuBufferSlice;
    equals(o: Object | null): boolean;
    hashCode(): number;
    outputTarget(): OutputTarget;
    pipeline(): RenderPipeline;
    scissorState(): ScissorState;
    setRenderWrapper(arg0: RenderingWrapper): void;
    textures(): PreparedRenderType$Texture[];
    toString(): string;
}