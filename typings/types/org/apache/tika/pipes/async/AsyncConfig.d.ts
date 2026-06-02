import type { PipesConfigBase } from '../../../../../org/apache/tika/pipes/PipesConfigBase.d.ts'
import type { PipesReporter } from '../../../../../org/apache/tika/pipes/PipesReporter.d.ts'
export class AsyncConfig extends PipesConfigBase {
    static DEFAULT_MAX_FILES_PROCESSED_PER_PROCESS: number;
    static DEFAULT_MAX_FOR_EMIT_BATCH: number;
    static DEFAULT_NUM_CLIENTS: number;
    static DEFAULT_SHUTDOWN_CLIENT_AFTER_MILLS: number;
    static DEFAULT_STALE_FETCHER_DELAY_SECONDS: number;
    static DEFAULT_STALE_FETCHER_TIMEOUT_SECONDS: number;
    static DEFAULT_STARTUP_TIMEOUT_MILLIS: number;
    static DEFAULT_TIMEOUT_MILLIS: number;
    static load(paramarg0: Path[][]): AsyncConfig;
    constructor()
    readonly emitIntermediateResults: boolean;
    readonly emitMaxEstimatedBytes: number;
    readonly emitWithinMillis: number;
    readonly numEmitters: number;
    readonly pipesReporter: PipesReporter;
    readonly queueSize: number;
    getEmitMaxEstimatedBytes(): number;
    getEmitWithinMillis(): number;
    getNumEmitters(): number;
    getPipesReporter(): PipesReporter;
    getQueueSize(): number;
    isEmitIntermediateResults(): boolean;
    setEmitIntermediateResults(arg0: boolean): void;
    setEmitMaxEstimatedBytes(arg0: number): void;
    setEmitWithinMillis(arg0: number): void;
    setNumEmitters(arg0: number): void;
    setPipesReporter(arg0: PipesReporter): void;
    setQueueSize(arg0: number): void;
}