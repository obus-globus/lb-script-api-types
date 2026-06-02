import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionBufferBuilderPack } from '../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
export class SectionBufferBuilderPool extends Object {
    static allocate(parammaxWorkers: number): SectionBufferBuilderPool;
    constructor(buffers: SectionBufferBuilderPack[])
    // private freeBuffers: SectionBufferBuilderPack[];
    acquire(): SectionBufferBuilderPack;
    getFreeBufferCount(): number;
    isEmpty(): boolean;
    release(buffer: SectionBufferBuilderPack): void;
}