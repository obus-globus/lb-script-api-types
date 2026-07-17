import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Initializable } from '../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { PipesReporter } from '../../../../org/apache/tika/pipes/PipesReporter.d.ts'
import type { PipesReporterBase$StatusFilter } from '../../../../org/apache/tika/pipes/PipesReporterBase$StatusFilter.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
export abstract class PipesReporterBase extends PipesReporter implements Initializable {
    static NO_OP_REPORTER: PipesReporter;
    constructor()
    readonly excludes: PipesResult$STATUS[];
    readonly includes: PipesResult$STATUS[];
    // private statusFilter: PipesReporterBase$StatusFilter;
    accept(arg0: PipesResult$STATUS): boolean;
    // private buildStatusFilter(arg0: PipesResult$STATUS[], arg1: PipesResult$STATUS[]): PipesReporterBase$StatusFilter;
    checkInitialization(arg0: InitializableProblemHandler): void;
    // private getOptionString(): string;
    initialize(arg0: JavaMap<string, Param<Object>>): void;
    setExcludes(arg0: string[]): void;
    setIncludes(arg0: string[]): void;
}