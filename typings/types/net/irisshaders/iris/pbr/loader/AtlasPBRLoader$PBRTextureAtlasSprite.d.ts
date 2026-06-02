import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { AtlasPBRLoader$PBRSpriteContents } from '../../../../../net/irisshaders/iris/pbr/loader/AtlasPBRLoader$PBRSpriteContents.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class AtlasPBRLoader$PBRTextureAtlasSprite extends TextureAtlasSprite {
    constructor(arg0: Identifier, arg1: AtlasPBRLoader$PBRSpriteContents, arg2: number, arg3: number, arg4: number, arg5: number, arg6: TextureAtlasSprite)
    readonly baseSprite: TextureAtlasSprite;
    // private pbrContents: SpriteContents;
    getBaseSprite(): TextureAtlasSprite;
    uploadFirstFrame(arg0: GpuTexture, arg1: number): void;
}