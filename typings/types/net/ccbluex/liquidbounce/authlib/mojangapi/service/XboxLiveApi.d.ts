import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { XboxAuthRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthRequest.d.ts'
import type { XboxAuthResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthResponse.d.ts'
export interface XboxLiveApi extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    authenticateWithXbox(request: XboxAuthRequest, $completion: Continuation<XboxAuthResponse>): any;
}