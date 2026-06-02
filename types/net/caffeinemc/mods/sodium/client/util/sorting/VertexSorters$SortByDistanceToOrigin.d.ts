import type { VertexSorting } from '../../../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { VertexSorters$AbstractSorter } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/sorting/VertexSorters$AbstractSorter.d.ts'
export class VertexSorters$SortByDistanceToOrigin extends VertexSorters$AbstractSorter {
    static DISTANCE_TO_ORIGIN: VertexSorting;
    static ORTHOGRAPHIC_Z: VertexSorting;
    private constructor()
    applyMetric(arg0: number, arg1: number, arg2: number): number;
}