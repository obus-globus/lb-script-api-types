import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { QuadSplittingMode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/QuadSplittingMode.d.ts'
import type { SortType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortType.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { BSPNode } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPNode.d.ts'
import type { BSPResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree/BSPResult.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { DynamicData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicData.d.ts'
import type { DynamicSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicSorter.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export class DynamicBSPData extends DynamicData {
    static BYTES_PER_INDEX: number;
    static BYTES_PER_QUAD: number;
    static INDICES_PER_QUAD: number;
    static VERTICES_PER_QUAD: number;
    static fromMesh(paramarg0: CombinedCameraPos, paramarg1: (Object | null)[], paramarg2: SectionPos, paramarg3: TranslucentData, paramarg4: QuadSplittingMode): DynamicBSPData;
    static quadCountToIndexBytes(paramarg0: number): number;
    static quadCountToVertexCount(paramarg0: number): number;
    static vertexCountToQuadCount(paramarg0: number): number;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number): void;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number[]): void;
    private constructor(arg0: SectionPos, arg1: number, arg2: BSPResult, arg3: Vector3dc, arg4: number)
    // private generation: number;
    readonly indexQuadCount: number;
    // private neededQuadSplitting: boolean;
    // private rootNode: BSPNode;
    // private updatedQuadsList: (Object | null)[];
    getIndexQuadCount(): number;
    getSorter(): DynamicSorter;
    getUpdatedQuads(): (Object | null)[];
    meshesWereModified(): boolean;
    oldDataMatches(arg0: TranslucentGeometryCollector, arg1: SortType, arg2: TQuad[]): boolean;
}