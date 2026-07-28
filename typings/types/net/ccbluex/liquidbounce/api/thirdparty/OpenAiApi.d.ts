import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
/**
 * OpenAI API
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt:34}
 */
export class OpenAiApi extends BaseApi {
    constructor(baseUrl: string, openAiKey: string, model: string, prompt: string)
    // private model: string;
    // private openAiKey: string;
    // private prompt: string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    requestNewAnswer(question: string, $completion: Continuation<string>): any;
}