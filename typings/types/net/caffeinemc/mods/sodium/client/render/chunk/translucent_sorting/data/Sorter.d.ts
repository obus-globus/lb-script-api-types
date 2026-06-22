import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { PresentSortData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/PresentSortData.d.ts'
import type { NativeBuffer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export interface Sorter extends Object, PresentSortData{
    destroy(): void;
    getIndexBuffer(): NativeBuffer;
    getIntBuffer(): IntBuffer;
    writeIndexBuffer(arg0: CombinedCameraPos, arg1: boolean): void;
}