import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class PBRSpriteHolder extends Object {
    constructor()
    normalSprite: TextureAtlasSprite;
    specularSprite: TextureAtlasSprite;
    close(): void;
    getNormalSprite(): TextureAtlasSprite;
    getSpecularSprite(): TextureAtlasSprite;
    setNormalSprite(arg0: TextureAtlasSprite): void;
    setSpecularSprite(arg0: TextureAtlasSprite): void;
}