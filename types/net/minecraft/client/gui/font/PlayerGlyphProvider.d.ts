import type { LoadingCache } from '../../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { FontDescription$PlayerSprite } from '../../../../../net/minecraft/network/chat/FontDescription$PlayerSprite.d.ts'
export class PlayerGlyphProvider extends Object {
    constructor(playerSkinRenderCache: PlayerSkinRenderCache)
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private wrapperCache: LoadingCache<FontDescription$PlayerSprite, GlyphSource>;
    sourceForPlayer(playerInfo: FontDescription$PlayerSprite): GlyphSource;
}