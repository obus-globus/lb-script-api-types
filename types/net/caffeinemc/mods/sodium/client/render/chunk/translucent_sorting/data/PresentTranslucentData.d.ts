import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { SortType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortType.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { Sorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/Sorter.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export abstract class PresentTranslucentData extends TranslucentData {
    static BYTES_PER_INDEX: number;
    static BYTES_PER_QUAD: number;
    static INDICES_PER_QUAD: number;
    static VERTICES_PER_QUAD: number;
    static quadCountToIndexBytes(paramarg0: number): number;
    static quadCountToVertexCount(paramarg0: number): number;
    static vertexCountToQuadCount(paramarg0: number): number;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number): void;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number[]): void;
    constructor(arg0: SectionPos, arg1: number)
    readonly inputQuadCount: number;
    readonly quadHash: number;
    getIndexQuadCount(): number;
    getInputQuadCount(): number;
    getSorter(): Sorter;
    hashMatches(arg0: TranslucentGeometryCollector): boolean;
    oldDataMatches(arg0: TranslucentGeometryCollector, arg1: SortType, arg2: TQuad[]): boolean;
    setQuadHash(arg0: number): void;
}