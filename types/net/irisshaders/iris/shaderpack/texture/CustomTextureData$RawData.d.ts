import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { CustomTextureData } from '../../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData.d.ts'
import type { TextureFilteringData } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureFilteringData.d.ts'
export abstract class CustomTextureData$RawData extends CustomTextureData {
    private constructor(arg0: number[], arg1: TextureFilteringData, arg2: InternalTextureFormat, arg3: PixelFormat, arg4: PixelType)
    readonly content: number[];
    readonly filteringData: TextureFilteringData;
    readonly internalFormat: InternalTextureFormat;
    readonly pixelFormat: PixelFormat;
    readonly pixelType: PixelType;
    getContent(): number[];
    getFilteringData(): TextureFilteringData;
    getInternalFormat(): InternalTextureFormat;
    getPixelFormat(): PixelFormat;
    getPixelType(): PixelType;
}