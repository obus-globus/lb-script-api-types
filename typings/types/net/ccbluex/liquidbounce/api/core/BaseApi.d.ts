import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { HttpMethod } from '../../../../../net/ccbluex/liquidbounce/api/core/HttpMethod.d.ts'
import type { Headers$Builder } from '../../../../../okhttp3/Headers$Builder.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
/**
 * Base API class
 *
 * @param baseUrl The base URL of the API
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt:41}
 */
export abstract class BaseApi extends Object {
    constructor(baseUrl: string, defaultHeaders: Pair<string, string>[])
    // private baseUrl: string;
    // private /*not mapped: */ getBaseUrl(): string;
    readonly defaultHeaders: Pair<string, string>[];
    protected delete<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    protected get<T extends unknown>(endpoint: string, headers: (param0: Headers$Builder) => void): T;
    protected head<T extends unknown>(endpoint: string, headers: (param0: Headers$Builder) => void): T;
    protected patch<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    protected post<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    protected put<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    /**
     * Makes a request and parses the response to the specified type
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt:46}
     */
    protected request<T extends unknown>(endpoint: string, method: HttpMethod, headers: (param0: Headers$Builder) => void, body: RequestBody | null): T;
}