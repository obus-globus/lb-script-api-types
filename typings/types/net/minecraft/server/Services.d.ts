import type { GameProfileRepository } from '../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { MinecraftSessionService } from '../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { ServicesKeySet } from '../../../com/mojang/authlib/yggdrasil/ServicesKeySet.d.ts'
import type { YggdrasilAuthenticationService } from '../../../com/mojang/authlib/yggdrasil/YggdrasilAuthenticationService.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProfileResolver } from '../../../net/minecraft/server/players/ProfileResolver.d.ts'
import type { UserNameToIdResolver } from '../../../net/minecraft/server/players/UserNameToIdResolver.d.ts'
import type { SignatureValidator } from '../../../net/minecraft/util/SignatureValidator.d.ts'
export class Services extends Record {
    static create(paramserviceAccess: YggdrasilAuthenticationService, paramnameCacheDir: File): Services;
    constructor(sessionService: MinecraftSessionService, servicesKeySet: ServicesKeySet, profileRepository: GameProfileRepository, nameToIdCache: UserNameToIdResolver, profileResolver: ProfileResolver)
    // private nameToIdCache: UserNameToIdResolver;
    // private profileRepository: GameProfileRepository;
    // private profileResolver: ProfileResolver;
    // private servicesKeySet: ServicesKeySet;
    // private sessionService: MinecraftSessionService;
    canValidateProfileKeys(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nameToIdCache(): UserNameToIdResolver;
    profileKeySignatureValidator(): SignatureValidator;
    profileRepository(): GameProfileRepository;
    profileResolver(): ProfileResolver;
    servicesKeySet(): ServicesKeySet;
    sessionService(): MinecraftSessionService;
    toString(): string;
}