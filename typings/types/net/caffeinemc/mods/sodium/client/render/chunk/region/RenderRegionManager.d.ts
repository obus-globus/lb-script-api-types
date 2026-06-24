import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/StagingBuffer.d.ts'
import type { IntPool } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/IntPool.d.ts'
import type { RenderSectionManager } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSectionManager.d.ts'
import type { UniformBufferManager } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/UniformBufferManager.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
export class RenderRegionManager extends Object {
    constructor(arg0: RenderSectionManager)
    // private freeIds: IntPool;
    // private parent: RenderSectionManager;
    // private regions: { [key: string]: any };
    readonly stagingBuffer: StagingBuffer;
    // private create(arg0: number, arg1: number, arg2: number): RenderRegion;
    createForChunk(arg0: number, arg1: number, arg2: number): RenderRegion;
    // private createMeshUploadQueues(arg0: BuilderTaskOutput[]): (Object | null)[];
    delete(): void;
    getForChunk(arg0: number, arg1: number, arg2: number): RenderRegion;
    getLoadedRegions(): RenderRegion[];
    getStagingBuffer(): StagingBuffer;
    update(): void;
    uploadResults(arg0: BuilderTaskOutput[], arg1: UniformBufferManager): void;
    // private uploadResults(arg0: RenderRegion, arg1: BuilderTaskOutput[], arg2: UniformBufferManager): void;
}