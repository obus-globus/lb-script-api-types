import type { EmbeddedServer } from '../../../../../io/ktor/server/engine/EmbeddedServer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
/**
 * A client server implementation.
 *
 * Allows the browser to communicate with the client. (e.g. for UIs)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/ClientInteropServer.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/ClientInteropServer.kt:60}
 */
export class ClientInteropServer extends Object {
    static INSTANCE: ClientInteropServer;
    readonly AUTH_CODE: string;
    PORT: number;
    // private attempt: number;
    // private isSkipping: boolean;
    /*not mapped: */ isSkipping(): boolean;
    // private server: EmbeddedServer<any, any> | null;
    readonly url: string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    start($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private startServer(port: number, authCode: string, $completion: Continuation<number>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    stop($completion: Continuation<void>): any;
}