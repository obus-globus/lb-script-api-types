import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/CustomMipmapGenerator.d.ts'
import type { PBRType } from '../../../../../net/irisshaders/iris/pbr/texture/PBRType.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export interface TextureFormat extends Object{
    canInterpolateValues(arg0: PBRType): boolean;
    getDefines(): string[];
    getMipmapGenerator(arg0: PBRType): CustomMipmapGenerator;
    name(): string;
    setupTextureParameters(arg0: PBRType, arg1: AbstractTexture): void;
    version(): string;
}