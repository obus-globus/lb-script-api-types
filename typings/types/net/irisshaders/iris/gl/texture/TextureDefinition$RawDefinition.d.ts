import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { TextureDefinition } from '../../../../../net/irisshaders/iris/gl/texture/TextureDefinition.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class TextureDefinition$RawDefinition extends TextureDefinition {
    constructor(arg0: string, arg1: TextureType, arg2: InternalTextureFormat, arg3: number, arg4: number, arg5: number, arg6: PixelFormat, arg7: PixelType)
    readonly format: PixelFormat;
    readonly internalFormat: InternalTextureFormat;
    readonly pixelType: PixelType;
    readonly sizeX: number;
    readonly sizeY: number;
    readonly sizeZ: number;
    readonly target: TextureType;
    getFormat(): PixelFormat;
    getInternalFormat(): InternalTextureFormat;
    getPixelType(): PixelType;
    getSizeX(): number;
    getSizeY(): number;
    getSizeZ(): number;
    getTarget(): TextureType;
}