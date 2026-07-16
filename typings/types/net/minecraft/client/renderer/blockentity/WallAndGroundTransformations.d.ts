import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class WallAndGroundTransformations<T extends unknown> extends Object {
    constructor(wallTransformationFactory: (param0: Direction) => T, freeTransformationFactory: (param0: number) => T, segments: number)
    // private freeTransformations: T[];
    // private wallTransforms: Map<Direction, T>;
    freeTransformations(segment: number): T;
    wallTransformation(facing: Direction): T;
}