import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SortItemsProvider } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortItemsProvider.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { ByteIterator } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/iterator/ByteIterator.d.ts'
import type { SectionPos } from '../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export class ChunkRenderList extends Object {
    constructor(arg0: RenderRegion)
    // private lastRelativeCameraSectionX: number;
    // private lastRelativeCameraSectionY: number;
    // private lastRelativeCameraSectionZ: number;
    readonly lastVisibleFrame: number;
    // private prevSectionsWithGeometryCount: number;
    // private prevSectionsWithGeometryMap: number[];
    readonly region: RenderRegion;
    // private sectionsWithEntities: number[];
    readonly sectionsWithEntitiesCount: number;
    // private sectionsWithGeometry: number[];
    readonly sectionsWithGeometryCount: number;
    // private sectionsWithGeometryMap: number[];
    // private sectionsWithSprites: number[];
    readonly sectionsWithSpritesCount: number;
    // private size: number;
    add(arg0: number): void;
    getLastVisibleFrame(): number;
    getRegion(): RenderRegion;
    getSectionsWithEntitiesCount(): number;
    getSectionsWithGeometryCount(): number;
    getSectionsWithSpritesCount(): number;
    prepareForRender(arg0: SectionPos, arg1: SortItemsProvider): void;
    reset(arg0: number): void;
    sectionsWithEntitiesIterator(): ByteIterator;
    sectionsWithGeometryIterator(arg0: boolean): ByteIterator;
    sectionsWithSpritesIterator(): ByteIterator;
    size(): number;
}