import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { SortType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortType.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export abstract class TranslucentData extends Object {
    static BYTES_PER_INDEX: number;
    static BYTES_PER_QUAD: number;
    static INDICES_PER_QUAD: number;
    static VERTICES_PER_QUAD: number;
    static quadCountToIndexBytes(paramarg0: number): number;
    static quadCountToVertexCount(paramarg0: number): number;
    static vertexCountToQuadCount(paramarg0: number): number;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number): void;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number[]): void;
    constructor(arg0: SectionPos)
    sectionPos: SectionPos;
    getSortType(): SortType;
    getUpdatedQuads(): (Object | null)[];
    meshesWereModified(): boolean;
    oldDataMatches(arg0: TranslucentGeometryCollector, arg1: SortType, arg2: TQuad[]): boolean;
    prepareTrigger(arg0: boolean): void;
}