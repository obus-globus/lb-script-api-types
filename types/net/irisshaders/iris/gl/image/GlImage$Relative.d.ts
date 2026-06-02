import type { GlImage } from '../../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
export class GlImage$Relative extends GlImage {
    constructor(arg0: string, arg1: string, arg2: PixelFormat, arg3: InternalTextureFormat, arg4: PixelType, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number)
    // private relativeHeight: number;
    // private relativeWidth: number;
    updateNewSize(arg0: number, arg1: number): void;
}