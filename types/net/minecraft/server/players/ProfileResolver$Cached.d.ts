import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { MinecraftSessionService } from '../../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfileResolver } from '../../../../net/minecraft/server/players/ProfileResolver.d.ts'
import type { UserNameToIdResolver } from '../../../../net/minecraft/server/players/UserNameToIdResolver.d.ts'
export class ProfileResolver$Cached extends Object implements ProfileResolver {
    constructor(sessionService: MinecraftSessionService, nameToIdCache: UserNameToIdResolver)
    // private profileCacheById: LoadingCache<UUID, Optional<GameProfile>>;
    // private profileCacheByName: LoadingCache<string, Optional<GameProfile>>;
    fetchById(id: UUID): Optional<GameProfile>;
    fetchByName(name: string): Optional<GameProfile>;
    fetchByNameOrId(nameOrId: Either<string, UUID>): Optional<GameProfile>;
}