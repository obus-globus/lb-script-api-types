import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { PresentSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/PresentSorter.d.ts'
export class StaticSorter extends PresentSorter {
    constructor(arg0: number)
    writeIndexBuffer(arg0: CombinedCameraPos, arg1: boolean): void;
}