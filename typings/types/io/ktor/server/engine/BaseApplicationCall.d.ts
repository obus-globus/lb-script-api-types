import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { BaseApplicationRequest } from '../../../../io/ktor/server/engine/BaseApplicationRequest.d.ts'
import type { BaseApplicationResponse } from '../../../../io/ktor/server/engine/BaseApplicationResponse.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export abstract class BaseApplicationCall extends Object implements PipelineCall {
    constructor(application: Application)
    readonly application: Application;
    readonly attributes: Attributes;
    /*not mapped: */ getCoroutineContext(): CoroutineContext;
    readonly parameters: Parameters;
    readonly request: BaseApplicationRequest;
    readonly response: BaseApplicationResponse;
    protected putResponseAttribute(response: BaseApplicationResponse): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveNullable<T extends unknown>(typeInfo: TypeInfo, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    respond(message: Object | null, typeInfo: TypeInfo | null, $completion: Continuation<void>): any;
}