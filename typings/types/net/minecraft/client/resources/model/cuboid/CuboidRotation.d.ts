import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidRotation$RotationValue } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidRotation$RotationValue.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class CuboidRotation extends Record {
    constructor(origin: Vector3fc, value: CuboidRotation$RotationValue, rescale: boolean)
    constructor(origin: Vector3fc, value: CuboidRotation$RotationValue, rescale: boolean, transform: Matrix4fc)
    // private origin: Vector3fc;
    // private rescale: boolean;
    // private transform: Matrix4fc;
    // private value: CuboidRotation$RotationValue;
    equals(o: Object | null): boolean;
    hashCode(): number;
    origin(): Vector3fc;
    rescale(): boolean;
    toString(): string;
    transform(): Matrix4fc;
    value(): CuboidRotation$RotationValue;
}