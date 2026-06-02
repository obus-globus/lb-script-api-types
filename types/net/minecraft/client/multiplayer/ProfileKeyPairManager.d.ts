import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProfileKeyPair } from '../../../../net/minecraft/world/entity/player/ProfileKeyPair.d.ts'
export interface ProfileKeyPairManager extends Object{
    prepareKeyPair(): CompletableFuture<Optional<ProfileKeyPair>>;
    shouldRefreshKeyPair(): boolean;
}