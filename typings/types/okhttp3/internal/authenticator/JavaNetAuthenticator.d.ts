import type { Object } from '../../../java/lang/Object.d.ts'
import type { Authenticator } from '../../../okhttp3/Authenticator.d.ts'
import type { Authenticator$Companion } from '../../../okhttp3/Authenticator$Companion.d.ts'
import type { Dns } from '../../../okhttp3/Dns.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { Route } from '../../../okhttp3/Route.d.ts'
export class JavaNetAuthenticator extends Object implements Authenticator {
    static Companion: Authenticator$Companion;
    static JAVA_NET_AUTHENTICATOR: Authenticator;
    static NONE: Authenticator;
    constructor(defaultDns: Dns)
    // private defaultDns: Dns;
    authenticate(route: Route | null, response: Response): Request | null;
}