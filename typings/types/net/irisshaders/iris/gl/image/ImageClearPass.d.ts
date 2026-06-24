import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlImage } from '../../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
export class ImageClearPass extends Object {
    static create(paramarg0: GlImage): ImageClearPass;
    private constructor(arg0: GlImage)
    // private image: GlImage;
    destroy(): void;
    execute(): void;
}