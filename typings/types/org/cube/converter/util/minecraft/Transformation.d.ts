import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export class Transformation extends Record {
    constructor(translation: Vector3f, left: Quaternionf, scale: Vector3f, right: Quaternionf)
    // private left: Quaternionf;
    // private right: Quaternionf;
    // private scale: Vector3f;
    // private translation: Vector3f;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Quaternionf;
    right(): Quaternionf;
    scale(): Vector3f;
    toString(): string;
    translation(): Vector3f;
}