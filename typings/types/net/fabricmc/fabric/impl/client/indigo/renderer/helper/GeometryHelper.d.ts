import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Vector3fc } from '../../../../../../../../org/joml/Vector3fc.d.ts'
export class GeometryHelper extends Object {
    static AXIS_ALIGNED_FLAG: number;
    static CUBIC_FLAG: number;
    static FLAG_BIT_COUNT: number;
    static LIGHT_FACE_FLAG: number;
    static computeShapeFlags(paramarg0: QuadView): number;
    static firstCubicVertex(paramarg0: QuadView): number;
    static isParallelQuadOnFace(paramarg0: Direction, paramarg1: QuadView): boolean;
    static isQuadCubic(paramarg0: Direction, paramarg1: QuadView): boolean;
    static isQuadParallelToFace(paramarg0: Direction, paramarg1: QuadView): boolean;
    static lightFace(paramarg0: QuadView): Direction;
    static longestAxis(paramarg0: number, paramarg1: number, paramarg2: number): Direction$Axis;
    static longestAxis(paramarg0: Vector3fc): Direction$Axis;
    private constructor()
}