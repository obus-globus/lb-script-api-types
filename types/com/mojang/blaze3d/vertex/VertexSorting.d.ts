import type { CompactVectorArray } from '../../../../com/mojang/blaze3d/vertex/CompactVectorArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface VertexSorting extends Object{
    sort(points: CompactVectorArray): number[];
}