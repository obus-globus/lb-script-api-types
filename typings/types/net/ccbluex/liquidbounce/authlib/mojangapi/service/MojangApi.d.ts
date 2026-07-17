import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ProfileIdName } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ProfileIdName.d.ts'
export interface MojangApi extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fetchProfiles(names: string[], $completion: Continuation<ProfileIdName[]>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fetchUuidByUsername(username: string, $completion: Continuation<ProfileIdName>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lookupProfilesBulk(names: string[], $completion: Continuation<ProfileIdName[]>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lookupUuidByName(username: string, $completion: Continuation<ProfileIdName>): any;
}