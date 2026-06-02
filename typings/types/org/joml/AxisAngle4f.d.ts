import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { NumberFormat } from '../../java/text/NumberFormat.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { AxisAngle4d } from '../../org/joml/AxisAngle4d.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaterniond } from '../../org/joml/Quaterniond.d.ts'
import type { Quaterniondc } from '../../org/joml/Quaterniondc.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class AxisAngle4f extends Object implements Externalizable, Cloneable {
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: Vector3fc)
    constructor(arg0: AxisAngle4f)
    constructor(arg0: Quaternionfc)
    angle: number;
    x: number;
    y: number;
    z: number;
    protected clone(): Object;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    get(arg0: AxisAngle4d): AxisAngle4d;
    get(arg0: AxisAngle4f): AxisAngle4f;
    get(arg0: Matrix3d): Matrix3d;
    get(arg0: Matrix3f): Matrix3f;
    get(arg0: Matrix4d): Matrix4d;
    get(arg0: Matrix4f): Matrix4f;
    get(arg0: Quaterniond): Quaterniond;
    get(arg0: Quaternionf): Quaternionf;
    hashCode(): number;
    normalize(): AxisAngle4f;
    readExternal(arg0: ObjectInput): void;
    rotate(arg0: number): AxisAngle4f;
    set(arg0: number, arg1: number, arg2: number, arg3: number): AxisAngle4f;
    set(arg0: number, arg1: Vector3fc): AxisAngle4f;
    set(arg0: AxisAngle4d): AxisAngle4f;
    set(arg0: AxisAngle4f): AxisAngle4f;
    set(arg0: Matrix3dc): AxisAngle4f;
    set(arg0: Matrix3fc): AxisAngle4f;
    set(arg0: Matrix4dc): AxisAngle4f;
    set(arg0: Matrix4fc): AxisAngle4f;
    set(arg0: Matrix4x3fc): AxisAngle4f;
    set(arg0: Quaterniondc): AxisAngle4f;
    set(arg0: Quaternionfc): AxisAngle4f;
    toString(): string;
    toString(arg0: NumberFormat): string;
    transform(arg0: Vector3f): Vector3f;
    transform(arg0: Vector3fc, arg1: Vector3f): Vector3f;
    transform(arg0: Vector4f): Vector4f;
    transform(arg0: Vector4fc, arg1: Vector4f): Vector4f;
    writeExternal(arg0: ObjectOutput): void;
}