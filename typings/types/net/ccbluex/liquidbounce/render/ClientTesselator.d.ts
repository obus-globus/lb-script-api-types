import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { BufferBuilder } from '../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pool } from '../../../../net/ccbluex/fastutil/Pool.d.ts'
export class ClientTesselator extends Object {
    static INSTANCE: ClientTesselator;
    static Shared: ByteBufferBuilder;
    static begin(pipeline: RenderPipeline, allocatorInUse: E[]): BufferBuilder;
    static recycleAll(allocatorInUse: (Object | null)[]): void;
    // private BUFFER_SIZE: number;
    Shared: ByteBufferBuilder;
    // private bufferAllocatorPool: Pool<ByteBufferBuilder>;
    begin(pipeline: RenderPipeline, allocatorInUse: E[]): BufferBuilder;
    recycleAll(allocatorInUse: ByteBufferBuilder[]): void;
}