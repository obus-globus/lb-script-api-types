import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { SectionBufferBuilderPack } from '../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { SectionBufferBuilderPool } from '../../../../net/minecraft/client/renderer/SectionBufferBuilderPool.d.ts'
export class RenderBuffers extends Object {
    constructor(maxSectionBuilders: number)
    // private bufferSource: MultiBufferSource$BufferSource;
    // private crumblingBufferSource: MultiBufferSource$BufferSource;
    // private fixedBufferPack: SectionBufferBuilderPack;
    // private outlineBufferSource: OutlineBufferSource;
    // private sectionBufferPool: SectionBufferBuilderPool;
    bufferSource(): MultiBufferSource$BufferSource;
    crumblingBufferSource(): MultiBufferSource$BufferSource;
    fixedBufferPack(): SectionBufferBuilderPack;
    outlineBufferSource(): OutlineBufferSource;
    sectionBufferPool(): SectionBufferBuilderPool;
}