import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Direction$Axis } from '../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Matrix3fc } from '../../../org/joml/Matrix3fc.d.ts'
import type { Vector3f } from '../../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../../org/joml/Vector3i.d.ts'
export class SymmetricGroup3 extends Enum<SymmetricGroup3> {
    static P123: SymmetricGroup3;
    static P132: SymmetricGroup3;
    static P213: SymmetricGroup3;
    static P231: SymmetricGroup3;
    static P312: SymmetricGroup3;
    static P321: SymmetricGroup3;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SymmetricGroup3;
    static values(): SymmetricGroup3[];
    private constructor(p0: number, p1: number, p2: number)
    // private p0: number;
    // private p1: number;
    // private p2: number;
    // private transformation: Matrix3fc;
    compose(that: SymmetricGroup3): SymmetricGroup3;
    inverse(): SymmetricGroup3;
    permute(i: number): number;
    permuteAxis(axis: Direction$Axis): Direction$Axis;
    permuteVector(v: Vector3f): Vector3f;
    permuteVector(v: Vector3i): Vector3i;
    transformation(): Matrix3fc;
    name(): "P123" | "P213" | "P132" | "P312" | "P231" | "P321";
}