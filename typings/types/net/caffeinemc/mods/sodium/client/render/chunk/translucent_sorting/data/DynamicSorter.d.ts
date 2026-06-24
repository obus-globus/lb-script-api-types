import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { PresentSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/PresentSorter.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
export abstract class DynamicSorter extends PresentSorter {
    constructor(arg0: number, arg1: TranslucentData)
    readonly quadCount: number;
    // private sourceData: TranslucentData;
    getQuadCount(): number;
    getResultSize(): number;
    writeIndexBuffer(arg0: CombinedCameraPos, arg1: boolean): void;
    writeSort(arg0: CombinedCameraPos, arg1: boolean): void;
}