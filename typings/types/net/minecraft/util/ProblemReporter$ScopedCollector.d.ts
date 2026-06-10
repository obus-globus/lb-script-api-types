import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { ProblemReporter } from '../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ProblemReporter$Collector } from '../../../net/minecraft/util/ProblemReporter$Collector.d.ts'
import type { ProblemReporter$PathElement } from '../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class ProblemReporter$ScopedCollector extends ProblemReporter$Collector implements AutoCloseable {
    static DISCARDING: ProblemReporter;
    static EMPTY_ROOT: () => string;
    constructor(root: () => string, logger: Logger)
    constructor(logger: Logger)
    // private logger: Logger;
    close(): void;
}