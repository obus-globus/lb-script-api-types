import type { GlResource } from '../../../../../net/irisshaders/iris/gl/GlResource.d.ts'
import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class GlImage extends GlResource {
    constructor(arg0: string, arg1: string, arg2: TextureType, arg3: PixelFormat, arg4: InternalTextureFormat, arg5: PixelType, arg6: boolean, arg7: number, arg8: number, arg9: number)
    // private clear: boolean;
    readonly format: PixelFormat;
    // private internalTextureFormat: InternalTextureFormat;
    readonly name: string;
    readonly pixelType: PixelType;
    readonly samplerName: string;
    readonly target: TextureType;
    destroyInternal(): void;
    getFormat(): PixelFormat;
    getId(): number;
    getInternalFormat(): InternalTextureFormat;
    getName(): string;
    getPixelType(): PixelType;
    getSamplerName(): string;
    getTarget(): TextureType;
    setup(arg0: number, arg1: number, arg2: number, arg3: number): void;
    shouldClear(): boolean;
    toString(): string;
    updateNewSize(arg0: number, arg1: number): void;
}