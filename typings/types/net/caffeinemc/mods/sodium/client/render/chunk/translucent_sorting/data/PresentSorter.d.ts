import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Sorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/Sorter.d.ts'
import type { NativeBuffer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export abstract class PresentSorter extends Object implements Sorter {
    constructor()
    readonly indexBuffer: NativeBuffer;
    destroy(): void;
    getIndexBuffer(): NativeBuffer;
    initBufferWithQuadLength(arg0: number): void;
}