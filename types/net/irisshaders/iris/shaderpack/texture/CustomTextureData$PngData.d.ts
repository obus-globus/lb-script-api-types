import type { CustomTextureData } from '../../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData.d.ts'
import type { TextureFilteringData } from '../../../../../net/irisshaders/iris/shaderpack/texture/TextureFilteringData.d.ts'
export class CustomTextureData$PngData extends CustomTextureData {
    constructor(arg0: TextureFilteringData, arg1: number[])
    readonly content: number[];
    readonly filteringData: TextureFilteringData;
    getContent(): number[];
    getFilteringData(): TextureFilteringData;
}