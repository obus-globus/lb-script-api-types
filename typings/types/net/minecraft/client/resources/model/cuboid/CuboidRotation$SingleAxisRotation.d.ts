import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidRotation$RotationValue } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidRotation$RotationValue.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
export class CuboidRotation$SingleAxisRotation extends Record implements CuboidRotation$RotationValue {
    constructor(axis: Direction$Axis, angle: number)
    // private angle: number;
    // private axis: Direction$Axis;
    angle(): number;
    axis(): Direction$Axis;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    transformation(): Matrix4f;
}