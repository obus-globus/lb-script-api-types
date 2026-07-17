import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { AutoSettings } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/AutoSettings.d.ts'
import type { Build } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/Build.d.ts'
import type { MessageOfTheDay } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/MessageOfTheDay.d.ts'
export class ClientApi extends BaseApi {
    static INSTANCE: ClientApi;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    requestMessageOfTheDayEndpoint(branch: string, $completion: Continuation<MessageOfTheDay>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    requestNewestBuildEndpoint(branch: string, release: boolean, $completion: Continuation<Build>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    requestSettingsList(branch: string, $completion: Continuation<AutoSettings[]>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    requestSettingsScript(settingId: string, branch: string, $completion: Continuation<Reader>): any;
}