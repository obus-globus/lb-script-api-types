import type { PipesReporterBase$StatusFilter } from '../../../../org/apache/tika/pipes/PipesReporterBase$StatusFilter.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
export class PipesReporterBase$IncludesFilter extends PipesReporterBase$StatusFilter {
    private constructor(arg0: PipesResult$STATUS[])
    // private includes: PipesResult$STATUS[];
    accept(arg0: PipesResult$STATUS): boolean;
}