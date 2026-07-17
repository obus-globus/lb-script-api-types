import type { JavaMap } from '../../JavaMap.d.ts'
import type { CookieHandler } from '../../java/net/CookieHandler.d.ts'
import type { CookiePolicy } from '../../java/net/CookiePolicy.d.ts'
import type { CookieStore } from '../../java/net/CookieStore.d.ts'
import type { HttpCookie } from '../../java/net/HttpCookie.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
export class CookieManager extends CookieHandler {
    static getDefault(): CookieHandler;
    static setDefault(paramarg0: CookieHandler): void;
    constructor()
    constructor(arg0: CookieStore, arg1: CookiePolicy)
    // private cookieJar: CookieStore;
    // private policyCallback: CookiePolicy;
    get(arg0: URI, arg1: JavaMap<string, string[]>): JavaMap<string, string[]>;
    getCookieStore(): CookieStore;
    // private pathMatches(arg0: string, arg1: string): boolean;
    put(arg0: URI, arg1: JavaMap<string, string[]>): void;
    setCookiePolicy(arg0: CookiePolicy): void;
    // private shouldAcceptInternal(arg0: URI, arg1: HttpCookie): boolean;
}