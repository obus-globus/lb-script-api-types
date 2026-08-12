import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { HttpMethod } from '../../../../../net/ccbluex/liquidbounce/api/core/HttpMethod.d.ts'
import type { Headers$Builder } from '../../../../../okhttp3/Headers$Builder.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
/**
 * Base API class
 *
 * @param baseUrl The base URL of the API
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/BaseApi.kt:41}
 */
export abstract class BaseApi extends Object {
    constructor(baseUrl: string, defaultHeaders: Pair<string, string>[])
    // private baseUrl: string;
    // private /*not mapped: */ getBaseUrl(): string;
    readonly defaultHeaders: Pair<string, string>[];
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected delete<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected get<T extends unknown>(endpoint: string, headers: (param0: Headers$Builder) => void, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected head<T extends unknown>(endpoint: string, headers: (param0: Headers$Builder) => void, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected patch<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected post<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected put<T extends unknown>(endpoint: string, body: RequestBody | null, headers: (param0: Headers$Builder) => void, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected request<T extends unknown>(endpoint: string, method: HttpMethod, headers: (param0: Headers$Builder) => void, body: RequestBody | null, $completion: Continuation<T>): any;
}