import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PipelineKt extends Object {
    static execute<TContext extends unknown>(self: Pipeline<void, TContext>, context: TContext): void;
    static intercept<TContext extends unknown, TSubject extends unknown>(self: Pipeline<Object, TContext>, phase: PipelinePhase, block: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void): void;
}