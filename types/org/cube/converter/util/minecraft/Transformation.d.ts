import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export class Transformation extends Object {
    constructor(arg0: Vector3f, arg1: Quaternionf, arg2: Vector3f, arg3: Quaternionf)
    readonly leftRotation: Quaternionf;
    readonly rightRotation: Quaternionf;
    readonly scale: Vector3f;
    readonly translation: Vector3f;
    getLeftRotation(): Quaternionf;
    getRightRotation(): Quaternionf;
    getScale(): Vector3f;
    getTranslation(): Vector3f;
    toString(): string;
}