import type { VertexSorting } from '../../../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { VertexSorting$DistanceFunction } from '../../../../../../../com/mojang/blaze3d/vertex/VertexSorting$DistanceFunction.d.ts'
import type { VertexSorters$AbstractSorter } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/sorting/VertexSorters$AbstractSorter.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export class VertexSorters$SortByFallback extends VertexSorters$AbstractSorter {
    static DISTANCE_TO_ORIGIN: VertexSorting;
    static ORTHOGRAPHIC_Z: VertexSorting;
    private constructor(arg0: (param0: Vector3f) => kotlin.Float)
    // private function: (param0: Vector3f) => kotlin.Float;
    // private scratch: Vector3f;
    applyMetric(arg0: number, arg1: number, arg2: number): number;
    applyMetric(arg0: Vector3f): number;
}