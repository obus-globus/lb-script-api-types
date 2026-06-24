import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidFace } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidFace.d.ts'
import type { CuboidRotation } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidRotation.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class CuboidModelElement extends Record {
    constructor(from: Vector3fc, to: Vector3fc, faces: { [key in Direction]: CuboidFace })
    constructor(from: Vector3fc, to: Vector3fc, faces: { [key in Direction]: CuboidFace }, rotation: CuboidRotation, shade: boolean, lightEmission: number)
    // private faces: { [key in Direction]: CuboidFace };
    // private from: Vector3fc;
    // private lightEmission: number;
    // private rotation: CuboidRotation;
    // private shade: boolean;
    // private to: Vector3fc;
    equals(o: Object | null): boolean;
    faces(): { [key in Direction]: CuboidFace };
    from(): Vector3fc;
    hashCode(): number;
    lightEmission(): number;
    rotation(): CuboidRotation;
    shade(): boolean;
    to(): Vector3fc;
    toString(): string;
}