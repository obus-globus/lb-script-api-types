import type { UserApiService } from '../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfileKeyPairManager } from '../../../../net/minecraft/client/multiplayer/ProfileKeyPairManager.d.ts'
import type { ProfileKeyPair } from '../../../../net/minecraft/world/entity/player/ProfileKeyPair.d.ts'
export class AccountProfileKeyPairManager extends Object implements ProfileKeyPairManager {
    static EMPTY_KEY_MANAGER: ProfileKeyPairManager;
    constructor(userApiService: UserApiService, profileId: UUID, gameDirectory: Path)
    // private keyPair: CompletableFuture<Optional<ProfileKeyPair>>;
    // private nextProfileKeyRefreshTime: Instant;
    // private profileKeyPairPath: Path;
    // private userApiService: UserApiService;
    // private fetchProfileKeyPair(userApiService: UserApiService): ProfileKeyPair;
    prepareKeyPair(): CompletableFuture<Optional<ProfileKeyPair>>;
    // private readOrFetchProfileKeyPair(cachedKeyPair: Optional<ProfileKeyPair>): CompletableFuture<Optional<ProfileKeyPair>>;
    // private readProfileKeyPair(): Optional<ProfileKeyPair>;
    shouldRefreshKeyPair(): boolean;
    // private writeProfileKeyPair(profileKeyPair: ProfileKeyPair): void;
}