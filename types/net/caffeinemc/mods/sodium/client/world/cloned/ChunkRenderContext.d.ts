import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClonedChunkSection } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ClonedChunkSection.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class ChunkRenderContext extends Object {
    constructor(arg0: SectionPos, arg1: ClonedChunkSection[], arg2: BoundingBox, arg3: (Object | null)[])
    readonly origin: SectionPos;
    readonly renderers: (Object | null)[];
    readonly sections: ClonedChunkSection[];
    readonly volume: BoundingBox;
    getOrigin(): SectionPos;
    getRenderers(): (Object | null)[];
    getSections(): ClonedChunkSection[];
    getVolume(): BoundingBox;
}