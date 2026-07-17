import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { JoinServerRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/JoinServerRequest.d.ts'
import type { SessionProfile } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/SessionProfile.d.ts'
import type { Response } from '../../../../../../retrofit2/Response.d.ts'
export interface SessionServerApi extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fetchProfile(uuid: string, $completion: Continuation<Response<SessionProfile>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fetchProfileSigned(uuid: string, unsigned: boolean, $completion: Continuation<Response<SessionProfile>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getBlockedServers($completion: Continuation<string>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    hasJoined(username: string, serverId: string, ip: string | null, $completion: Continuation<Response<SessionProfile>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    joinServer(request: JoinServerRequest, $completion: Continuation<Response<void>>): any;
}