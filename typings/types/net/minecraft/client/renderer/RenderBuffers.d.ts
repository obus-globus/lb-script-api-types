import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionBufferBuilderPack } from '../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { SectionBufferBuilderPool } from '../../../../net/minecraft/client/renderer/SectionBufferBuilderPool.d.ts'
import type { StagedVertexBuffer } from '../../../../net/minecraft/client/renderer/StagedVertexBuffer.d.ts'
export class RenderBuffers extends Object implements AutoCloseable {
    constructor(maxSectionBuilders: number)
    // private fixedBufferPack: SectionBufferBuilderPack;
    // private sectionBufferPool: SectionBufferBuilderPool;
    // private stagedVertexBuffer: StagedVertexBuffer;
    close(): void;
    endFrame(): void;
    fixedBufferPack(): SectionBufferBuilderPack;
    sectionBufferPool(): SectionBufferBuilderPool;
    stagedVertexBuffer(): StagedVertexBuffer;
}