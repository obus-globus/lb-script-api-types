import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
/**
 * OpenAI API
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt:34}
 */
export class OpenAiApi extends BaseApi {
    constructor(baseUrl: string, openAiKey: string, model: string, prompt: string)
    // private model: string;
    // private openAiKey: string;
    // private prompt: string;
    /**
     * Requests a new answer from the OpenAI API
     *
     * @param question The question to ask
     * @returns The response from the AI
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/OpenAiApi.kt:47}
     */
    requestNewAnswer(question: string): string;
}