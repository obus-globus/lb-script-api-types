import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { GameProfileRepository } from '../../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { ProfileLookupCallback } from '../../../../com/mojang/authlib/ProfileLookupCallback.d.ts'
import type { MinecraftClient } from '../../../../com/mojang/authlib/minecraft/client/MinecraftClient.d.ts'
import type { NameAndId } from '../../../../com/mojang/authlib/yggdrasil/response/NameAndId.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilGameProfileRepository extends Object implements GameProfileRepository {
    constructor(arg0: Proxy, arg1: Environment)
    // private client: MinecraftClient;
    // private nameLookupUrl: string;
    // private searchPageUrl: URL;
    findProfileByName(arg0: string): Optional<NameAndId>;
    findProfilesByNames(arg0: string[], arg1: ProfileLookupCallback): void;
}