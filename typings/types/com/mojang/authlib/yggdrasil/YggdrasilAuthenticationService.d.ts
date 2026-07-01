import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { GameProfileRepository } from '../../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { HttpAuthenticationService } from '../../../../com/mojang/authlib/HttpAuthenticationService.d.ts'
import type { MinecraftSessionService } from '../../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { UserApiService } from '../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { FriendsService } from '../../../../com/mojang/authlib/yggdrasil/FriendsService.d.ts'
import type { ServicesKeySet } from '../../../../com/mojang/authlib/yggdrasil/ServicesKeySet.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilAuthenticationService extends HttpAuthenticationService {
    static buildQuery(paramarg0: { [key: string]: Object }): string;
    static concatenateURL(paramarg0: URL, paramarg1: string): URL;
    static constantURL(paramarg0: string): URL;
    static createOffline(paramarg0: Proxy): YggdrasilAuthenticationService;
    static createOffline(paramarg0: Proxy, paramarg1: Environment): YggdrasilAuthenticationService;
    constructor(arg0: Proxy)
    constructor(arg0: Proxy, arg1: Environment)
    // private environment: Environment;
    readonly servicesKeySet: ServicesKeySet;
    createFriendsService(arg0: string): FriendsService;
    createMinecraftSessionService(): MinecraftSessionService;
    createProfileRepository(): GameProfileRepository;
    createUserApiService(arg0: string): UserApiService;
    getServicesKeySet(): ServicesKeySet;
}