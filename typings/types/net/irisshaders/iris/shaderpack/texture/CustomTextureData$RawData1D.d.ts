import type { InternalTextureFormat } from '../../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
import type { PixelFormat } from '../../../../../net/irisshaders/iris/gl/texture/PixelFormat.d.ts'
import type { PixelType } from '../../../../../net/irisshaders/iris/gl/texture/PixelType.d.ts'
import type { CustomTextureData$RawData } from '../../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData$RawData.d.ts'
import type { TextureFilteringData } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureFilteringData.d.ts'
export class CustomTextureData$RawData1D extends CustomTextureData$RawData {
    constructor(arg0: number[], arg1: TextureFilteringData, arg2: InternalTextureFormat, arg3: PixelFormat, arg4: PixelType, arg5: number)
    readonly sizeX: number;
    getSizeX(): number;
}