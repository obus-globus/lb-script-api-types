import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class PipelineContextKt extends Object {
    static pipelineContextFor<TSubject extends unknown, TContext extends unknown>(context: TContext, interceptors: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[], subject: TSubject, coroutineContext: CoroutineContext, debugMode: boolean): PipelineContext<TSubject, TContext>;
}