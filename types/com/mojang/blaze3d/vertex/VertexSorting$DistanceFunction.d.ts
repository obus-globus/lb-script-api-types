import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export interface VertexSorting$DistanceFunction extends Object{
    apply(value: Vector3f): number;
}