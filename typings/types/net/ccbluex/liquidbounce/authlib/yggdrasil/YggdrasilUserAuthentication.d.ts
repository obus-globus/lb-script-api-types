import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Session } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/Session.d.ts'
import type { YggdrasilUserAuthentication$Companion } from '../../../../../net/ccbluex/liquidbounce/authlib/yggdrasil/YggdrasilUserAuthentication$Companion.d.ts'
export class YggdrasilUserAuthentication extends Object {
    static Companion: YggdrasilUserAuthentication$Companion;
    static DEFAULT_BASE_URL: string;
    static Default: YggdrasilUserAuthentication;
    constructor()
    constructor(baseUrl: string)
    readonly baseUrl: string;
    authenticate(username: string, password: string): Session;
}