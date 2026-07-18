import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class PipelineJvmKt extends Object {
    static pipelineStartCoroutineUninterceptedOrReturn<TSubject extends unknown, TContext extends unknown>(interceptor: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void, context: PipelineContext<TSubject, TContext>, subject: TSubject, continuation: Continuation<void>): Object | null;
}