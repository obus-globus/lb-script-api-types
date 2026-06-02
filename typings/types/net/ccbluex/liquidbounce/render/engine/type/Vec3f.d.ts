import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3f$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f$Companion.d.ts'
import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { Position } from '../../../../../../net/minecraft/core/Position.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class Vec3f extends Record {
    static Companion: Vec3f$Companion;
    static X_AXIS: Vec3f;
    static Y_AXIS: Vec3f;
    static ZERO: Vec3f;
    static Z_AXIS: Vec3f;
    static eyeVector(paramarg0: Camera): Vec3f;
    constructor(x: number, y: number, z: number)
    constructor(x: number, y: number, z: number)
    constructor(vec: Position)
    constructor(vec: Vec3i)
    constructor(vec: Vector3fc)
    // private x: number;
    /*not mapped: */ x(): number;
    // private y: number;
    /*not mapped: */ y(): number;
    // private z: number;
    /*not mapped: */ z(): number;
    add(x: number, y: number, z: number): Vec3f;
    add(other: Vec3f): Vec3f;
    component1(): number;
    component2(): number;
    component3(): number;
    copy(x: number, y: number, z: number): Vec3f;
    equals(other: Object | null): boolean;
    fma(scale: number, other: Vec3f): Vec3f;
    hashCode(): number;
    length(): number;
    lengthSqr(): number;
    minus(other: Vec3f): Vec3f;
    normalized(): Vec3f;
    plus(other: Vec3f): Vec3f;
    rotateX(angle: number): Vec3f;
    rotateY(angle: number): Vec3f;
    // private sub(other: Vec3f): Vec3f;
    times(scale: number): Vec3f;
    toString(): string;
    toVec3d(): Vec3;
    unaryMinus(): Vec3f;
}