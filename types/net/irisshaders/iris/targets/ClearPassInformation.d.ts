import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export class ClearPassInformation extends Object {
    constructor(arg0: Vector4f, arg1: number, arg2: number)
    readonly color: Vector4f;
    readonly height: number;
    readonly width: number;
    equals(arg0: Object | null): boolean;
    getColor(): Vector4f;
    getHeight(): number;
    getWidth(): number;
}