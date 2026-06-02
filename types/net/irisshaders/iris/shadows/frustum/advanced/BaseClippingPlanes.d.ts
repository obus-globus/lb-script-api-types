import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
import type { Vector4f } from '../../../../../../org/joml/Vector4f.d.ts'
export class BaseClippingPlanes extends Object {
    constructor(arg0: Matrix4fc)
    readonly planes: Vector4f[];
    getPlanes(): Vector4f[];
    // private init(arg0: Matrix4fc): void;
}