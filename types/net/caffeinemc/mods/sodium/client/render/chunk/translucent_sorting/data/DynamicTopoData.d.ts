import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Supplier } from '../../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { DynamicData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicData.d.ts'
import type { DynamicSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicSorter.d.ts'
import type { DynamicTopoData$DynamicTopoSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicTopoData$DynamicTopoSorter.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { GeometryPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/GeometryPlanes.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class DynamicTopoData extends DynamicData {
    static BYTES_PER_INDEX: number;
    static BYTES_PER_QUAD: number;
    static INDICES_PER_QUAD: number;
    static VERTICES_PER_QUAD: number;
    static fromMesh(paramarg0: CombinedCameraPos, paramarg1: (Object | null)[], paramarg2: SectionPos, paramarg3: GeometryPlanes): DynamicTopoData;
    static quadCountToIndexBytes(paramarg0: number): number;
    static quadCountToVertexCount(paramarg0: number): number;
    static vertexCountToQuadCount(paramarg0: number): number;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number): void;
    static writeQuadVertexIndexes(paramarg0: IntBuffer, paramarg1: number[]): void;
    private constructor(arg0: SectionPos, arg1: TQuad[], arg2: GeometryPlanes, arg3: Vector3dc, arg4: () => Map<Vector3fc, number[]>)
    // private GFNITrigger: boolean;
    // private centroids: Vector3fc[];
    // private consecutiveTopoSortFailures: number;
    // private directTrigger: boolean;
    readonly directTriggerKey: number;
    // private distancesByNormal: Map<Vector3fc, number[]>;
    // private pendingTriggerIsDirect: boolean;
    // private quads: TQuad[];
    GFNITriggerEnabled(): boolean;
    applyTopoSortFailureCounterChange(arg0: DynamicTopoData$DynamicTopoSorter): void;
    checkAndApplyDirectTriggerOff(arg0: DynamicTopoData$DynamicTopoSorter): boolean;
    checkAndApplyDirectTriggerOn(arg0: DynamicTopoData$DynamicTopoSorter): boolean;
    checkAndApplyGFNITriggerOff(arg0: DynamicTopoData$DynamicTopoSorter): boolean;
    // private checkDirectSortingFallback(): void;
    // private computeCentroids(arg0: TQuad[]): void;
    // private copyStateFrom(arg0: DynamicTopoData$DynamicTopoSorter): void;
    directTriggerEnabled(): boolean;
    getDirectTriggerKey(): number;
    getSorter(): DynamicSorter;
    isMatchingSorter(arg0: DynamicTopoData$DynamicTopoSorter): boolean;
    prepareTrigger(arg0: boolean): void;
    setDirectTriggerKey(arg0: number): void;
}