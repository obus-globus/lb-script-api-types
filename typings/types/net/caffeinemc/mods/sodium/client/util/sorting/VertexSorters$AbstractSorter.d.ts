import type { CompactVectorArray } from '../../../../../../../com/mojang/blaze3d/vertex/CompactVectorArray.d.ts'
import type { VertexSorting } from '../../../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VertexSortingExtended } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/sorting/VertexSortingExtended.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export abstract class VertexSorters$AbstractSorter extends Object implements VertexSortingExtended {
    static DISTANCE_TO_ORIGIN: VertexSorting;
    static ORTHOGRAPHIC_Z: VertexSorting;
    private constructor()
    applyMetric(arg0: number, arg1: number, arg2: number): number;
    applyMetric(arg0: Vector3f): number;
    sort(arg0: CompactVectorArray): number[];
}