import type { LoadingCache } from '../../../../com/google/common/cache/LoadingCache.d.ts'
import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { SignatureState } from '../../../../com/mojang/authlib/SignatureState.d.ts'
import type { MinecraftProfileTextures } from '../../../../com/mojang/authlib/minecraft/MinecraftProfileTextures.d.ts'
import type { MinecraftSessionService } from '../../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { MinecraftClient } from '../../../../com/mojang/authlib/minecraft/client/MinecraftClient.d.ts'
import type { Property } from '../../../../com/mojang/authlib/properties/Property.d.ts'
import type { ProfileResult } from '../../../../com/mojang/authlib/yggdrasil/ProfileResult.d.ts'
import type { ServicesKeySet } from '../../../../com/mojang/authlib/yggdrasil/ServicesKeySet.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinYggdrasilMinecraftSessionServiceAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/authlib/MixinYggdrasilMinecraftSessionServiceAccessor.d.ts'
export class YggdrasilMinecraftSessionService extends Object implements MinecraftSessionService, MixinYggdrasilMinecraftSessionServiceAccessor {
    constructor(arg0: ServicesKeySet, arg1: Proxy, arg2: Environment)
    readonly baseUrl: string;
    // private checkUrl: URL;
    // private client: MinecraftClient;
    // private gson: Gson;
    // private insecureProfiles: LoadingCache<UUID, Optional<ProfileResult>>;
    // private joinUrl: URL;
    // private servicesKeySet: ServicesKeySet;
    fetchProfile(arg0: UUID, arg1: boolean): ProfileResult;
    // private fetchProfileUncached(arg0: UUID, arg1: boolean): ProfileResult;
    getBaseUrl(): string;
    getPackedTextures(arg0: GameProfile): Property;
    // private getPropertySignatureState(arg0: Property): SignatureState;
    getSecurePropertyValue(arg0: Property): string;
    getTextures(arg0: GameProfile): MinecraftProfileTextures;
    hasJoinedServer(arg0: string, arg1: string, arg2: InetAddress): ProfileResult;
    joinServer(arg0: UUID, arg1: string, arg2: string): void;
    unpackTextures(arg0: Property): MinecraftProfileTextures;
}