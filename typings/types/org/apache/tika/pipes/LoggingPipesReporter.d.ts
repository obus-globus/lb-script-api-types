import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FetchEmitTuple } from '../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { PipesReporter } from '../../../../org/apache/tika/pipes/PipesReporter.d.ts'
import type { PipesResult } from '../../../../org/apache/tika/pipes/PipesResult.d.ts'
import type { TotalCountResult } from '../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class LoggingPipesReporter extends PipesReporter {
    static NO_OP_REPORTER: PipesReporter;
    constructor()
    // private LOGGER: Logger;
    error(arg0: string): void;
    error(arg0: Throwable): void;
    report(arg0: FetchEmitTuple, arg1: PipesResult, arg2: number): void;
    report(arg0: TotalCountResult): void;
}