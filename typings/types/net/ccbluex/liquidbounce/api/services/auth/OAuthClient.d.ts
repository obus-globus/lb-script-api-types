import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ClientAccount } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
/**
 * OAuth client for handling the authentication flow
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:54}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:91}
     */
    renewToken(session: OAuthSession): OAuthSession;
    /**
     * Start the OAuth authentication flow
     *
     * @param onUrl Callback for when the authorization URL is ready
     * @returns Client account with the authenticated session
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:67}
     */
    startAuth(onUrl: (param0: string) => void): ClientAccount;
    // private startNettyServer(): number;
    unregister(): void;
    // private waitForAuthCode(): string;
}