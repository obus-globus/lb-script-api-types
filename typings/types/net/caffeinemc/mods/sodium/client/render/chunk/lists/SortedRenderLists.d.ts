import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../../java/util/Iterator.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
import type { ChunkRenderListIterable } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderListIterable.d.ts'
import type { ReversibleObjectArrayIterator } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/iterator/ReversibleObjectArrayIterator.d.ts'
export class SortedRenderLists extends Object implements ChunkRenderListIterable {
    static empty(): SortedRenderLists;
    constructor(arg0: ChunkRenderList[])
    // private lists: ChunkRenderList[];
    iterator(): Iterator<ChunkRenderList>;
    iterator(): Iterator<ChunkRenderList>;
    iterator(arg0: boolean): ReversibleObjectArrayIterator<ChunkRenderList>;
}