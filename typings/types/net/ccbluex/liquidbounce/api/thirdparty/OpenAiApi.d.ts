import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
/**
 * OpenAI API
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt:34}
 */
export class OpenAiApi extends BaseApi {
    constructor(baseUrl: string, openAiKey: string, model: string, prompt: string)
    // private model: string;
    // private openAiKey: string;
    // private prompt: string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    requestNewAnswer(question: string, $completion: Continuation<string>): any;
}