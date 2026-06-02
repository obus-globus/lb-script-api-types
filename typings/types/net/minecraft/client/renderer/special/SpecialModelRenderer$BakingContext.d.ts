import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
export interface SpecialModelRenderer$BakingContext extends Object{
    entityModelSet(): EntityModelSet;
    playerSkinRenderCache(): PlayerSkinRenderCache;
    sprites(): SpriteGetter;
}