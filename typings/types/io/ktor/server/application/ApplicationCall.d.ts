import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export interface ApplicationCall extends Object, CoroutineScope{
    readonly application: Application;
    readonly attributes: Attributes;
    readonly parameters: Parameters;
    readonly request: ApplicationRequest;
    readonly response: ApplicationResponse;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveNullable<T extends unknown>(typeInfo: TypeInfo, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    respond(message: Object | null, typeInfo: TypeInfo | null, $completion: Continuation<void>): any;
}