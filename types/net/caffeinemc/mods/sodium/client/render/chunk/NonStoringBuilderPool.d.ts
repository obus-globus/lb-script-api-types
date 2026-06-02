import type { SectionBufferBuilderPack } from '../../../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { SectionBufferBuilderPool } from '../../../../../../../net/minecraft/client/renderer/SectionBufferBuilderPool.d.ts'
export class NonStoringBuilderPool extends SectionBufferBuilderPool {
    static allocate(parammaxWorkers: number): SectionBufferBuilderPool;
    constructor()
    acquire(): SectionBufferBuilderPack;
    getFreeBufferCount(): number;
    isEmpty(): boolean;
    release(arg0: SectionBufferBuilderPack): void;
}