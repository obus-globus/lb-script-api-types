import type { ISolverService } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolverService.d.ts'
import type { SearchListenerAdapter } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/SearchListenerAdapter.d.ts'
import type { UnitClauseConsumer } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitClauseConsumer.d.ts'
export class VoidTracing extends SearchListenerAdapter<ISolverService> {
    static VOID: UnitClauseConsumer;
    constructor()
}