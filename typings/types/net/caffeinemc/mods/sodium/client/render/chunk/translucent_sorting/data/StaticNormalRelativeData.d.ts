import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { SortType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortType.d.ts'
import type { PresentTranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/PresentTranslucentData.d.ts'
import type { Sorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/Sorter.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export class StaticNormalRelativeData extends PresentTranslucentData {
    static BYTES_PER_INDEX: number;
    static BYTES_PER_QUAD: number;
    static INDICES_PER_QUAD: number;
    static VERTICES_PER_QUAD: number;
    static fromMesh(paramarg0: number[], paramarg1: TQuad[], paramarg2: SectionPos, paramarg3: boolean): StaticNormalRelativeData;
    static quadCountToIndexBytes(paramarg0: number): number;
    static quadCountToVertexCount(paramarg0: number): number;
    static vertexCountToQuadCount(paramarg0: number): number;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number): void;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number[]): void;
    constructor(arg0: SectionPos, arg1: number)
    // private sorterOnce: Sorter;
    getSortType(): SortType;
    getSorter(): Sorter;
}