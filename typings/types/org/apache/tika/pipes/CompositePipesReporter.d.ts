import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Initializable } from '../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../org/apache/tika/config/Param.d.ts'
import type { FetchEmitTuple } from '../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { PipesReporter } from '../../../../org/apache/tika/pipes/PipesReporter.d.ts'
import type { PipesResult } from '../../../../org/apache/tika/pipes/PipesResult.d.ts'
import type { TotalCountResult } from '../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult.d.ts'
export class CompositePipesReporter extends PipesReporter implements Initializable {
    static NO_OP_REPORTER: PipesReporter;
    constructor()
    readonly pipesReporters: PipesReporter[];
    addPipesReporter(arg0: PipesReporter): void;
    checkInitialization(arg0: InitializableProblemHandler): void;
    close(): void;
    error(arg0: string): void;
    error(arg0: Throwable): void;
    getPipesReporters(): PipesReporter[];
    initialize(arg0: JavaMap<string, Param<Object>>): void;
    report(arg0: FetchEmitTuple, arg1: PipesResult, arg2: number): void;
    report(arg0: TotalCountResult): void;
    supportsTotalCount(): boolean;
}