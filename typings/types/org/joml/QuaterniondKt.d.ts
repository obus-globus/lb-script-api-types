import type { Object } from '../../java/lang/Object.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3dc } from '../../org/joml/Vector3dc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4dc } from '../../org/joml/Vector4dc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class QuaterniondKt extends Object {
    static difference(self: Quaterniondc, q: Quaterniondc): Quaterniond;
    static div(self: Quaterniondc, s: number): Quaterniond;
    static div(self: Quaterniondc, q: Quaterniondc): Quaterniond;
    static divAssign(self: Quaterniond, s: number): void;
    static divAssign(self: Quaterniond, q: Quaterniondc): void;
    static minus(self: Quaterniondc, q: Quaterniondc): Quaterniond;
    static minusAssign(self: Quaterniond, q: Quaterniondc): void;
    static plus(self: Quaterniondc, q: Quaterniondc): Quaterniond;
    static plusAssign(self: Quaterniond, q: Quaterniondc): void;
    static times(self: Quaterniondc, s: number): Quaterniond;
    static times(self: Quaterniondc, q: Quaterniondc): Quaterniond;
    static times(self: Quaterniondc, v: Vector3dc): Vector3d;
    static times(self: Quaterniondc, v: Vector3fc): Vector3f;
    static times(self: Quaterniondc, v: Vector4dc): Vector4d;
    static times(self: Quaterniondc, v: Vector4fc): Vector4f;
    static timesAssign(self: Quaterniond, s: number): void;
    static timesAssign(self: Quaterniond, q: Quaterniondc): void;
}