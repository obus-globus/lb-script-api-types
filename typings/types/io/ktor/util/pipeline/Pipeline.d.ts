import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { PhaseContent } from '../../../../io/ktor/util/pipeline/PhaseContent.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class Pipeline<TSubject extends unknown, TContext extends unknown> extends Object {
    constructor(phase: PipelinePhase, interceptors: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[])
    constructor(...phases: PipelinePhase[])
    readonly attributes: Attributes;
    readonly developmentMode: boolean;
    // private interceptorsListShared: boolean;
    // private interceptorsListSharedPhase: PipelinePhase | null;
    // private interceptorsQuantity: number;
    /*not mapped: */ isEmpty(): boolean;
    readonly items: PipelinePhase[];
    // private phasesRaw: Object[];
    addPhase(phase: PipelinePhase): void;
    afterIntercepted(): void;
    // private cacheInterceptors(): (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    // private createContext(context: TContext, subject: TSubject, coroutineContext: CoroutineContext): PipelineContext<TSubject, TContext>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    execute(context: TContext, subject: TSubject, $completion: Continuation<TSubject>): any;
    // private fastPathMerge(from: Pipeline<TSubject, TContext>): boolean;
    // private findPhase(phase: PipelinePhase): PhaseContent<TSubject, TContext> | null;
    // private findPhaseIndex(phase: PipelinePhase): number;
    // private hasPhase(phase: PipelinePhase): boolean;
    insertPhaseAfter(reference: PipelinePhase, phase: PipelinePhase): void;
    insertPhaseBefore(reference: PipelinePhase, phase: PipelinePhase): void;
    // private insertRelativePhase(fromPhaseOrContent: Object, fromPhase: PipelinePhase): boolean;
    intercept(phase: PipelinePhase, block: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void): void;
    interceptorsForPhase(phase: PipelinePhase): (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    interceptorsForTests(): (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    merge(from: Pipeline<TSubject, TContext>): void;
    // private mergeInterceptors(from: Pipeline<TSubject, TContext>): void;
    mergePhases(from: Pipeline<TSubject, TContext>): void;
    // private notSharedInterceptorsList(list: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[]): void;
    phaseInterceptors(phase: PipelinePhase): (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    resetFrom(from: Pipeline<TSubject, TContext>): void;
    // private resetInterceptorsList(): void;
    // private setInterceptorsListFromAnotherPipeline(pipeline: Pipeline<TSubject, TContext>): void;
    // private setInterceptorsListFromPhase(phaseContent: PhaseContent<TSubject, TContext>): void;
    // private sharedInterceptorsList(): (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void[];
    toString(): string;
    // private tryAddToPhaseFastPath(phase: PipelinePhase, block: (param0: PipelineContext<TSubject, TContext>, param1: TSubject) => void): boolean;
}