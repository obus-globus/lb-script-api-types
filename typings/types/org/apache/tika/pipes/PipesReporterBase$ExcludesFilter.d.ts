import type { PipesReporterBase$StatusFilter } from '../../../../org/apache/tika/pipes/PipesReporterBase$StatusFilter.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
export class PipesReporterBase$ExcludesFilter extends PipesReporterBase$StatusFilter {
    constructor(arg0: PipesResult$STATUS[])
    // private excludes: PipesResult$STATUS[];
    accept(arg0: PipesResult$STATUS): boolean;
}