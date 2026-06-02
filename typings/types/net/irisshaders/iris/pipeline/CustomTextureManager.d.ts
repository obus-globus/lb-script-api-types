import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlTexture } from '../../../../net/irisshaders/iris/gl/texture/GlTexture.d.ts'
import type { TextureAccess } from '../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { CustomTextureData } from '../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData.d.ts'
import type { TextureStage } from '../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class CustomTextureManager extends Object {
    constructor(arg0: PackDirectives, arg1: { [key in TextureStage]: { [key: string]: CustomTextureData } }, arg2: { [key: string]: CustomTextureData }, arg3: CustomTextureData)
    readonly customTextureIdMap: { [key in TextureStage]: { [key: string]: TextureAccess } };
    readonly irisCustomTextures: { [key: string]: TextureAccess };
    // private noise: TextureAccess;
    // private ownedRawTextures: GlTexture[];
    // private ownedTextures: AbstractTexture[];
    // private createCustomTexture(arg0: CustomTextureData): TextureAccess;
    destroy(): void;
    getCustomTextureIdMap(): { [key in TextureStage]: { [key: string]: TextureAccess } };
    getCustomTextureIdMap(arg0: TextureStage): { [key: string]: TextureAccess };
    getIrisCustomTextures(): { [key: string]: TextureAccess };
    getNoiseTexture(): TextureAccess;
}