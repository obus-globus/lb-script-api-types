import type { IntConsumer } from '../../../../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class TopoGraphSorting extends Object {
    static orthogonalQuadVisibleThrough(paramarg0: TQuad, paramarg1: TQuad, paramarg2: boolean): boolean;
    static topoGraphSort(paramarg0: (param0: number) => void, paramarg1: TQuad[], paramarg2: number, paramarg3: number[], paramarg4: Map<Vector3fc, number[]>, paramarg5: Vector3fc, paramarg6: boolean): boolean;
    static topoGraphSort(paramarg0: (param0: number) => void, paramarg1: TQuad[], paramarg2: Map<Vector3fc, number[]>, paramarg3: Vector3fc, paramarg4: boolean): boolean;
    private constructor()
}