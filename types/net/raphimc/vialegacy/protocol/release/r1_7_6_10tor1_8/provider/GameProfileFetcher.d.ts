import type { LoadingCache } from '../../../../../../../com/google/common/cache/LoadingCache.d.ts'
import type { GameProfile } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { Provider } from '../../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class GameProfileFetcher extends Object implements Provider {
    constructor()
    // private gameProfileCache: LoadingCache<UUID, GameProfile>;
    // private uuidCache: LoadingCache<string, UUID>;
    getGameProfile(arg0: UUID): GameProfile;
    getGameProfileAsync(arg0: UUID): CompletableFuture<GameProfile>;
    getMojangUuid(arg0: string): UUID;
    getMojangUuidAsync(arg0: string): CompletableFuture<UUID>;
    isGameProfileLoaded(arg0: UUID): boolean;
    isUuidLoaded(arg0: string): boolean;
    loadGameProfile(arg0: UUID): GameProfile;
    loadMojangUuid(arg0: string): UUID;
}