import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export interface SpriteUtil extends Object{
    hasAnimation(arg0: TextureAtlasSprite): boolean;
    markSpriteActive(arg0: TextureAtlasSprite): void;
}