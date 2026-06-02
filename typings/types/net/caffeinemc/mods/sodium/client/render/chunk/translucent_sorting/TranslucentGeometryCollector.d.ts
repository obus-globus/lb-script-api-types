import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadFacing } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { QuadSplittingMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
import type { SortBehavior } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior.d.ts'
import type { SortType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortType.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { TranslucentData } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { TQuad } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { SectionPos } from '../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export class TranslucentGeometryCollector extends Object {
    static STATIC_TOPO_UNKNOWN_FALLBACK_LIMIT: number;
    constructor(arg0: SectionPos, arg1: SortBehavior)
    // private alignedExtentsMultiple: boolean;
    // private alignedExtremes: number[];
    // private alignedFacingBitmap: number;
    // private extents: number[];
    // private hasUnaligned: boolean;
    // private meshFacingCounts: number[];
    readonly quadHash: number;
    // private quadHashPresent: boolean;
    // private quadLists: TQuad[][];
    // private quadSplittingMode: QuadSplittingMode;
    // private quads: TQuad[];
    // private sectionPos: SectionPos;
    // private sortBehavior: SortBehavior;
    // private sortType: SortType;
    // private unalignedADistance1: number;
    // private unalignedADistance2: number;
    // private unalignedANormal: number;
    // private unalignedBDistance1: number;
    // private unalignedBDistance2: number;
    // private unalignedBNormal: number;
    // private untrackedUnalignedNormalCount: number;
    appendQuad(arg0: ChunkVertexEncoder$Vertex[], arg1: ModelQuadFacing, arg2: number): boolean;
    finishRendering(): SortType;
    // private getPlaneCount(arg0: number): number;
    getQuadHash(): number;
    getTranslucentData(arg0: TranslucentData, arg1: CombinedCameraPos): TranslucentData;
    isSplittingQuads(): boolean;
    // private makeNewTranslucentData(arg0: CombinedCameraPos, arg1: TranslucentData): TranslucentData;
    // private sortTypeHeuristic(): SortType;
}