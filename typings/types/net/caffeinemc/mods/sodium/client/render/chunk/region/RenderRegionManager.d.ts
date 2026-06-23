import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/StagingBuffer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
export class RenderRegionManager extends Object {
    constructor(arg0: CommandList)
    // private regions: { [key: string]: any };
    readonly stagingBuffer: StagingBuffer;
    // private create(arg0: number, arg1: number, arg2: number): RenderRegion;
    createForChunk(arg0: number, arg1: number, arg2: number): RenderRegion;
    // private createMeshUploadQueues(arg0: BuilderTaskOutput[]): (Object | null)[];
    delete(arg0: CommandList): void;
    getLoadedRegions(): RenderRegion[];
    getStagingBuffer(): StagingBuffer;
    update(): void;
    uploadResults(arg0: CommandList, arg1: BuilderTaskOutput[]): void;
    // private uploadResults(arg0: CommandList, arg1: RenderRegion, arg2: BuilderTaskOutput[]): void;
}