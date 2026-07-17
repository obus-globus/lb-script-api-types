import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlTexture } from '../../../../net/irisshaders/iris/gl/texture/GlTexture.d.ts'
import type { TextureAccess } from '../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { CustomTextureData } from '../../../../net/irisshaders/iris/shaderpack/texture/CustomTextureData.d.ts'
import type { TextureStage } from '../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class CustomTextureManager extends Object {
    constructor(arg0: PackDirectives, arg1: JavaMap<TextureStage, JavaMap<string, CustomTextureData>>, arg2: JavaMap<string, CustomTextureData>, arg3: CustomTextureData)
    readonly customTextureIdMap: JavaMap<TextureStage, JavaMap<string, TextureAccess>>;
    readonly irisCustomTextures: JavaMap<string, TextureAccess>;
    // private noise: TextureAccess;
    // private ownedRawTextures: GlTexture[];
    // private ownedTextures: AbstractTexture[];
    // private createCustomTexture(arg0: CustomTextureData): TextureAccess;
    destroy(): void;
    getCustomTextureIdMap(): JavaMap<TextureStage, JavaMap<string, TextureAccess>>;
    getCustomTextureIdMap(arg0: TextureStage): JavaMap<string, TextureAccess>;
    getIrisCustomTextures(): JavaMap<string, TextureAccess>;
    getNoiseTexture(): TextureAccess;
}