import type { PipesReporterBase$StatusFilter } from '../../../../org/apache/tika/pipes/PipesReporterBase$StatusFilter.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
export class PipesReporterBase$AcceptAllFilter extends PipesReporterBase$StatusFilter {
    private constructor()
    accept(arg0: PipesResult$STATUS): boolean;
}