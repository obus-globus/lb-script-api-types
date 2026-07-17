import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { XboxAuthResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthResponse.d.ts'
import type { XstsAuthRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XstsAuthRequest.d.ts'
export interface XstsApi extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    authorizeWithXsts(request: XstsAuthRequest, $completion: Continuation<XboxAuthResponse>): any;
}