import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { GameProfileRepository } from '../../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedUserNameToIdResolver$GameProfileInfo } from '../../../../net/minecraft/server/players/CachedUserNameToIdResolver$GameProfileInfo.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserNameToIdResolver } from '../../../../net/minecraft/server/players/UserNameToIdResolver.d.ts'
export class CachedUserNameToIdResolver extends Object implements UserNameToIdResolver {
    constructor(profileRepository: GameProfileRepository, file: File)
    // private file: File;
    // private gson: Gson;
    // private operationCount: AtomicLong;
    // private profileRepository: GameProfileRepository;
    // private profilesByName: { [key: string]: CachedUserNameToIdResolver$GameProfileInfo };
    // private profilesByUUID: Map<UUID, CachedUserNameToIdResolver$GameProfileInfo>;
    // private resolveOfflineUsers: boolean;
    add(nameAndId: NameAndId): void;
    // private addInternal(profile: NameAndId): CachedUserNameToIdResolver$GameProfileInfo;
    // private createUnknownProfile(name: string): Optional<NameAndId>;
    get(id: UUID): Optional<NameAndId>;
    get(name: string): Optional<NameAndId>;
    // private getNextOperation(): number;
    // private getTopMRUProfiles(limit: number): Stream<CachedUserNameToIdResolver$GameProfileInfo>;
    // private load(): CachedUserNameToIdResolver$GameProfileInfo[];
    // private lookupGameProfile(profileRepository: GameProfileRepository, name: string): Optional<NameAndId>;
    resolveOfflineUsers(value: boolean): void;
    // private safeAdd(profileInfo: CachedUserNameToIdResolver$GameProfileInfo): void;
    save(): void;
}