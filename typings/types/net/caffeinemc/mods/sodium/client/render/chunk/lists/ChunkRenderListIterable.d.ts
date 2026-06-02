import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../../java/util/Iterator.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
export interface ChunkRenderListIterable extends Object{
    iterator(): Iterator<ChunkRenderList>;
    iterator(arg0: boolean): Iterator<ChunkRenderList>;
}