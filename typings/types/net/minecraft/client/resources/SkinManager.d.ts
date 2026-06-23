import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { MinecraftProfileTextures } from '../../../../com/mojang/authlib/minecraft/MinecraftProfileTextures.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SkinTextureDownloader } from '../../../../net/minecraft/client/renderer/texture/SkinTextureDownloader.d.ts'
import type { SkinManager$CacheKey } from '../../../../net/minecraft/client/resources/SkinManager$CacheKey.d.ts'
import type { SkinManager$TextureCache } from '../../../../net/minecraft/client/resources/SkinManager$TextureCache.d.ts'
import type { Services } from '../../../../net/minecraft/server/Services.d.ts'
import type { PlayerSkin } from '../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class SkinManager extends Object {
    constructor(skinsDirectory: Path[], services: Services, skinTextureDownloader: SkinTextureDownloader, mainThreadExecutor: Executor)
    // private capeTextures: SkinManager$TextureCache;
    // private elytraTextures: SkinManager$TextureCache;
    // private services: Services;
    // private skinCache: LoadingCache<SkinManager$CacheKey, CompletableFuture<Optional<PlayerSkin>>>;
    // private skinTextureDownloader: SkinTextureDownloader;
    // private skinTextures: SkinManager$TextureCache;
    createLookup(profile: GameProfile, requireSecure: boolean): () => PlayerSkin;
    get(profile: GameProfile): CompletableFuture<Optional<PlayerSkin>>;
    // private registerTextures(profileId: UUID, textures: MinecraftProfileTextures): CompletableFuture<PlayerSkin>;
}