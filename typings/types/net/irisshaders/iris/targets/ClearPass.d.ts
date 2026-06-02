import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export class ClearPass extends Object {
    constructor(arg0: Vector4f, arg1: () => kotlin.Int, arg2: () => kotlin.Int, arg3: GlFramebuffer, arg4: number)
    // private clearFlags: number;
    // private color: Vector4f;
    readonly framebuffer: GlFramebuffer;
    // private viewportX: () => kotlin.Int;
    // private viewportY: () => kotlin.Int;
    execute(arg0: Vector4f): void;
    getFramebuffer(): GlFramebuffer;
}