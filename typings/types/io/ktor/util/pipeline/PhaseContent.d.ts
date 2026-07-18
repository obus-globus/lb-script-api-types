import type { PhaseContent$Companion } from '../../../../io/ktor/util/pipeline/PhaseContent$Companion.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { PipelinePhaseRelation } from '../../../../io/ktor/util/pipeline/PipelinePhaseRelation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PhaseContent<TSubject extends unknown, Call extends unknown> extends Object {
    static Companion: PhaseContent$Companion;
    constructor(phase: PipelinePhase, relation: PipelinePhaseRelation)
    constructor(phase: PipelinePhase, relation: PipelinePhaseRelation, interceptors: (param0: PipelineContext<TSubject, Call>, param1: TSubject) => void[])
    // private interceptors: (param0: PipelineContext<TSubject, Call>, param1: TSubject) => void[];
    /*not mapped: */ isEmpty(): boolean;
    readonly phase: PipelinePhase;
    readonly relation: PipelinePhaseRelation;
    shared: boolean;
    readonly size: number;
    addInterceptor(interceptor: (param0: PipelineContext<TSubject, Call>, param1: TSubject) => void): void;
    addTo(destination: PhaseContent<TSubject, Call>): void;
    addTo(destination: (param0: PipelineContext<TSubject, Call>, param1: TSubject) => void[]): void;
    // private copiedInterceptors(): (param0: PipelineContext<TSubject, Call>, param1: TSubject) => void[];
    // private copyInterceptors(): void;
    sharedInterceptors(): (param0: PipelineContext<TSubject, Call>, param1: TSubject) => void[];
    toString(): string;
}