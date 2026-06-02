import type { VertexSorting } from '../../../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export interface VertexSortingExtended extends VertexSorting, Object{
    applyMetric(arg0: number, arg1: number, arg2: number): number;
    applyMetric(arg0: Vector3f): number;
}