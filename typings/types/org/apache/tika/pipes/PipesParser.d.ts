import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FetchEmitTuple } from '../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
import type { PipesClient } from '../../../../org/apache/tika/pipes/PipesClient.d.ts'
import type { PipesConfig } from '../../../../org/apache/tika/pipes/PipesConfig.d.ts'
import type { PipesResult } from '../../../../org/apache/tika/pipes/PipesResult.d.ts'
export class PipesParser extends Object implements Closeable {
    constructor(arg0: PipesConfig)
    // private clientQueue: PipesClient[];
    // private clients: PipesClient[];
    // private pipesConfig: PipesConfig;
    close(): void;
    parse(arg0: FetchEmitTuple): PipesResult;
}