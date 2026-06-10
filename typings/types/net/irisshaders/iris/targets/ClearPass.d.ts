import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export class ClearPass extends Object {
    constructor(arg0: Vector4f, arg1: () => number, arg2: () => number, arg3: GlFramebuffer, arg4: number)
    // private clearFlags: number;
    // private color: Vector4f;
    readonly framebuffer: GlFramebuffer;
    // private viewportX: () => number;
    // private viewportY: () => number;
    execute(arg0: Vector4f): void;
    getFramebuffer(): GlFramebuffer;
}