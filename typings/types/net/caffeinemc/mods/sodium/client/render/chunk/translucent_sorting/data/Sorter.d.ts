import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { PresentSortData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/PresentSortData.d.ts'
export interface Sorter extends Object, PresentSortData{
    destroy(): void;
    getIntBuffer(): IntBuffer;
    writeIndexBuffer(arg0: CombinedCameraPos, arg1: boolean): void;
}