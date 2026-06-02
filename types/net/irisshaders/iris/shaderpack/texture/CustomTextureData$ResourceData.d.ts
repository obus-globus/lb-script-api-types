import type { CustomTextureData } from '../../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData.d.ts'
export class CustomTextureData$ResourceData extends CustomTextureData {
    constructor(arg0: string, arg1: string)
    readonly location: string;
    readonly namespace: string;
    getLocation(): string;
    getNamespace(): string;
}