import type { Object } from '../../java/lang/Object.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class QuaternionfKt extends Object {
    static difference(self: Quaternionfc, q: Quaternionfc): Quaternionf;
    static div(self: Quaternionfc, s: number): Quaternionf;
    static div(self: Quaternionfc, q: Quaternionfc): Quaternionf;
    static divAssign(self: Quaternionf, s: number): void;
    static divAssign(self: Quaternionf, q: Quaternionfc): void;
    static minus(self: Quaternionfc, q: Quaternionfc): Quaternionf;
    static minusAssign(self: Quaternionf, q: Quaternionfc): void;
    static plus(self: Quaternionfc, q: Quaternionfc): Quaternionf;
    static plusAssign(self: Quaternionf, q: Quaternionfc): void;
    static times(self: Quaternionfc, s: number): Quaternionf;
    static times(self: Quaternionfc, q: Quaternionfc): Quaternionf;
    static times(self: Quaternionfc, v: Vector3fc): Vector3f;
    static times(self: Quaternionfc, v: Vector4fc): Vector4f;
    static timesAssign(self: Quaternionf, s: number): void;
    static timesAssign(self: Quaternionf, q: Quaternionfc): void;
}