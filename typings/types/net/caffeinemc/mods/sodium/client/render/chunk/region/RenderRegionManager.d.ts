import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/StagingBuffer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
export class RenderRegionManager extends Object {
    constructor(arg0: CommandList)
    // private regions: Long2ReferenceOpenHashMap<RenderRegion>;
    readonly stagingBuffer: StagingBuffer;
    // private create(arg0: number, arg1: number, arg2: number): RenderRegion;
    createForChunk(arg0: number, arg1: number, arg2: number): RenderRegion;
    // private createMeshUploadQueues(arg0: E[]): (Object | null)[];
    delete(arg0: CommandList): void;
    getLoadedRegions(): E[];
    getStagingBuffer(): StagingBuffer;
    update(): void;
    uploadResults(arg0: CommandList, arg1: E[]): void;
    // private uploadResults(arg0: CommandList, arg1: RenderRegion, arg2: E[]): void;
}