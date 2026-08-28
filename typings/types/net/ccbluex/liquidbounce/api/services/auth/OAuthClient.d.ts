import type { EmbeddedServer } from '../../../../../../io/ktor/server/engine/EmbeddedServer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CompletableDeferred } from '../../../../../../kotlinx/coroutines/CompletableDeferred.d.ts'
import type { ClientAccount } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ClientAccount.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * OAuth client for handling the authentication flow
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/auth/OAuthClient.kt:45}
 */
export class OAuthClient extends Object implements EventListener {
    static INSTANCE: OAuthClient;
    // private SUCCESS_HTML: string;
    // private authCodeDeferred: CompletableDeferred<string> | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly running: boolean;
    // private server: EmbeddedServer<any, any> | null;
    // private serverPort: number | null;
    // private buildAuthUrl(codeChallenge: string, state: string, redirectUri: string): string;
    children(): EventListener[];
    parent(): EventListener | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    renewToken(session: OAuthSession, $completion: Continuation<OAuthSession>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    startAuth(onUrl: (param0: string) => void, $completion: Continuation<ClientAccount>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private startKtorServer($completion: Continuation<number>): any;
    unregister(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private waitForAuthCode($completion: Continuation<string>): any;
}