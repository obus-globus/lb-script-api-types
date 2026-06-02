import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PlayerSkinRenderCache$RenderInfo } from '../../../../net/minecraft/client/renderer/PlayerSkinRenderCache$RenderInfo.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { SkinManager } from '../../../../net/minecraft/client/resources/SkinManager.d.ts'
import type { ProfileResolver } from '../../../../net/minecraft/server/players/ProfileResolver.d.ts'
import type { ResolvableProfile } from '../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class PlayerSkinRenderCache extends Object {
    static CACHE_DURATION: Duration;
    static DEFAULT_PLAYER_SKIN_RENDER_TYPE: RenderType;
    constructor(textureManager: TextureManager, skinManager: SkinManager, profileResolver: ProfileResolver)
    // private defaultSkinCache: LoadingCache<ResolvableProfile, PlayerSkinRenderCache$RenderInfo>;
    // private profileResolver: ProfileResolver;
    // private renderInfoCache: LoadingCache<ResolvableProfile, CompletableFuture<Optional<PlayerSkinRenderCache$RenderInfo>>>;
    // private skinManager: SkinManager;
    // private textureManager: TextureManager;
    createLookup(profile: ResolvableProfile): () => PlayerSkinRenderCache$RenderInfo;
    getOrDefault(profile: ResolvableProfile): PlayerSkinRenderCache$RenderInfo;
    lookup(profile: ResolvableProfile): CompletableFuture<Optional<PlayerSkinRenderCache$RenderInfo>>;
}