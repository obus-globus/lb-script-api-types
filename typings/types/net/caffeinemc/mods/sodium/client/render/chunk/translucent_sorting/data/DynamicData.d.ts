import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { SortType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortType.d.ts'
import type { DynamicSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicSorter.d.ts'
import type { PresentTranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/PresentTranslucentData.d.ts'
import type { GeometryPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/GeometryPlanes.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export abstract class DynamicData extends PresentTranslucentData {
    static BYTES_PER_INDEX: number;
    static BYTES_PER_QUAD: number;
    static INDICES_PER_QUAD: number;
    static VERTICES_PER_QUAD: number;
    static quadCountToIndexBytes(paramarg0: number): number;
    static quadCountToVertexCount(paramarg0: number): number;
    static vertexCountToQuadCount(paramarg0: number): number;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number): void;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number[]): void;
    constructor(arg0: SectionPos, arg1: number, arg2: GeometryPlanes, arg3: Vector3dc)
    readonly geometryPlanes: GeometryPlanes;
    readonly initialCameraPos: Vector3dc;
    discardGeometryPlanes(): void;
    getGeometryPlanes(): GeometryPlanes;
    getInitialCameraPos(): Vector3dc;
    getSortType(): SortType;
    getSorter(): DynamicSorter;
    isMatchingSorter(arg0: DynamicSorter): boolean;
}