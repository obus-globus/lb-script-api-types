import type { VertexSorting$DistanceFunction } from '../../../../../../../com/mojang/blaze3d/vertex/VertexSorting$DistanceFunction.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VertexSortingExtended } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/sorting/VertexSortingExtended.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export class VertexSorters extends Object {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number): VertexSortingExtended;
    static fallback(paramarg0: (param0: Vector3f) => number): VertexSortingExtended;
    static orthographicZ(): VertexSortingExtended;
    static sort(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: VertexSortingExtended): number[];
    static sortWithCentroid(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: VertexSortingExtended): number[];
    static sortWithPerspective(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: VertexSortingExtended, paramarg4: number, paramarg5: number, paramarg6: number): number[];
    constructor()
}