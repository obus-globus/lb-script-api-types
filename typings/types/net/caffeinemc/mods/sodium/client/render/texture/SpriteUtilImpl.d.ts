import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteUtil } from '../../../../../../../net/caffeinemc/mods/sodium/api/texture/SpriteUtil.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class SpriteUtilImpl extends Object implements SpriteUtil {
    static INSTANCE: SpriteUtil;
    constructor()
    hasAnimation(arg0: TextureAtlasSprite): boolean;
    markSpriteActive(arg0: TextureAtlasSprite): void;
}