import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FetchEmitTuple } from '../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { PipesResult } from '../../../../org/apache/tika/pipes/PipesResult.d.ts'
import type { TotalCountResult } from '../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult.d.ts'
export abstract class PipesReporter extends Object implements Closeable {
    static NO_OP_REPORTER: PipesReporter;
    constructor()
    close(): void;
    error(arg0: string): void;
    error(arg0: Throwable): void;
    report(arg0: FetchEmitTuple, arg1: PipesResult, arg2: number): void;
    report(arg0: TotalCountResult): void;
    supportsTotalCount(): boolean;
}