import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { QuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/QuadViewImpl.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Vector3fc } from '../../../../../../../org/joml/Vector3fc.d.ts'
export abstract class GeometryHelper extends Object {
    static FLAG_BIT_COUNT: number;
    static isQuadParallelToFace(paramarg0: Direction, paramarg1: QuadViewImpl): boolean;
    static lightFace(paramarg0: ModelQuadView): Direction;
    static longestAxis(paramarg0: number, paramarg1: number, paramarg2: number): Direction$Axis;
    static longestAxis(paramarg0: Vector3fc): Direction$Axis;
    private constructor()
}