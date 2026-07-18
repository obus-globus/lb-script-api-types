import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { PipelinePhaseRelation } from '../../../../io/ktor/util/pipeline/PipelinePhaseRelation.d.ts'
export class PipelinePhaseRelation$Before extends PipelinePhaseRelation {
    constructor(relativeTo: PipelinePhase)
    readonly relativeTo: PipelinePhase;
}