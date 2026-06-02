import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalTextureFormat } from '../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { RenderTarget } from '../../../../net/irisshaders/iris/targets/RenderTarget.d.ts'
export class RenderTarget$Builder extends Object {
    private constructor()
    // private format: PixelFormat;
    // private height: number;
    // private internalFormat: InternalTextureFormat;
    // private name: string;
    // private type: PixelType;
    // private width: number;
    build(): RenderTarget;
    setDimensions(arg0: number, arg1: number): RenderTarget$Builder;
    setInternalFormat(arg0: InternalTextureFormat): RenderTarget$Builder;
    setName(arg0: string): RenderTarget$Builder;
    setPixelFormat(arg0: PixelFormat): RenderTarget$Builder;
    setPixelType(arg0: PixelType): RenderTarget$Builder;
}