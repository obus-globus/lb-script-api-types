import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { GlImage } from '../../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
export abstract class ImageClearPass extends Object {
    static create(paramarg0: GlImage): ImageClearPass;
    private constructor(arg0: GlImage)
    // private framebuffer: GlFramebuffer;
    destroy(): void;
    execute(): void;
}