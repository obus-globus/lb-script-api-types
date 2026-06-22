import type { AuthenticationService } from '../../../com/mojang/authlib/AuthenticationService.d.ts'
import type { GameProfileRepository } from '../../../com/mojang/authlib/GameProfileRepository.d.ts'
import type { MinecraftSessionService } from '../../../com/mojang/authlib/minecraft/MinecraftSessionService.d.ts'
import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class HttpAuthenticationService extends Object implements AuthenticationService {
    static buildQuery(paramarg0: { [key: string]: Object }): string;
    static concatenateURL(paramarg0: URL, paramarg1: string): URL;
    static constantURL(paramarg0: string): URL;
    constructor(arg0: Proxy)
    readonly proxy: Proxy;
    createMinecraftSessionService(): MinecraftSessionService;
    createProfileRepository(): GameProfileRepository;
    getProxy(): Proxy;
}