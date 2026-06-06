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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt:36}
 */
export abstract class BaseApi extends Object {
    constructor(baseUrl: string, defaultHeaders: Pair<string, string>[])
    // private baseUrl: string;
    // private /*not mapped: */ getBaseUrl(): string;
    readonly defaultHeaders: Pair<string, string>[];
    protected delete<T extends Object | number | string | boolean>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    protected get<T extends Object | number | string | boolean>(endpoint: string, headers: (param0: Headers$Builder) => void): T;
    protected head<T extends Object | number | string | boolean>(endpoint: string, headers: (param0: Headers$Builder) => void): T;
    protected patch<T extends Object | number | string | boolean>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    protected post<T extends Object | number | string | boolean>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    protected put<T extends Object | number | string | boolean>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void): T;
    /**
     * Makes a request and parses the response to the specified type
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt:43}
     */
    protected request<T extends Object | number | string | boolean>(endpoint: string, method: HttpMethod, headers: (param0: Headers$Builder) => void, body: RequestBody | null): T;
}