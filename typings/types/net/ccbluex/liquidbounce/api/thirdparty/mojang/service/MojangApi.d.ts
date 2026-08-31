import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ProfileIdName } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/mojang/model/ProfileIdName.d.ts'
/**
 * Endpoints on {@link api.mojang.com}(https://api.mojang.com).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/mojang/service/MojangApi.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/mojang/service/MojangApi.kt:31}
 */
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