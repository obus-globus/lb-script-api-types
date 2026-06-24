import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidRotation$RotationValue } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidRotation$RotationValue.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
export class CuboidRotation$EulerXYZRotation extends Record implements CuboidRotation$RotationValue {
    constructor(x: number, y: number, z: number)
    // private x: number;
    // private y: number;
    // private z: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    transformation(): Matrix4f;
    x(): number;
    y(): number;
    z(): number;
}