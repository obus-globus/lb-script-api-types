import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ClientAccount } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * OAuth client for handling the authentication flow
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:51}
 */
export class OAuthClient extends Object implements EventListener {
    static INSTANCE: OAuthClient;
    // private SUCCESS_HTML: string;
    // private authCodeContinuation: Continuation<string> | null;
    // private serverPort: number | null;
    // private buildAuthUrl(codeChallenge: string, state: string, redirectUri: string): string;
    children(): EventListener[];
    parent(): EventListener | null;
    /**
     * Renew an expired session using its refresh token
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:88}
     */
    renewToken(session: OAuthSession): OAuthSession;
    /**
     * Start the OAuth authentication flow
     *
     * @param onUrl Callback for when the authorization URL is ready
     * @returns Client account with the authenticated session
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:61}
     */
    startAuth(onUrl: (param0: string) => void): ClientAccount;
    // private startNettyServer(): number;
    unregister(): void;
    // private waitForAuthCode(): string;
}