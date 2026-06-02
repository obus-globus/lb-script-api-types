import type { ConfigBase } from '../../../../org/apache/tika/config/ConfigBase.d.ts'
export class PipesConfigBase extends ConfigBase {
    static DEFAULT_MAX_FILES_PROCESSED_PER_PROCESS: number;
    static DEFAULT_MAX_FOR_EMIT_BATCH: number;
    static DEFAULT_NUM_CLIENTS: number;
    static DEFAULT_SHUTDOWN_CLIENT_AFTER_MILLS: number;
    static DEFAULT_STALE_FETCHER_DELAY_SECONDS: number;
    static DEFAULT_STALE_FETCHER_TIMEOUT_SECONDS: number;
    static DEFAULT_STARTUP_TIMEOUT_MILLIS: number;
    static DEFAULT_TIMEOUT_MILLIS: number;
    constructor()
    readonly forkedJvmArgs: string[];
    readonly javaPath: string;
    readonly maxFilesProcessedPerProcess: number;
    readonly maxForEmitBatchBytes: number;
    readonly numClients: number;
    readonly shutdownClientAfterMillis: number;
    readonly sleepOnStartupTimeoutMillis: number;
    readonly staleFetcherDelaySeconds: number;
    readonly staleFetcherTimeoutSeconds: number;
    readonly startupTimeoutMillis: number;
    readonly tikaConfig: Path[];
    readonly timeoutMillis: number;
    getForkedJvmArgs(): string[];
    getJavaPath(): string;
    getMaxFilesProcessedPerProcess(): number;
    getMaxForEmitBatchBytes(): number;
    getNumClients(): number;
    getShutdownClientAfterMillis(): number;
    getSleepOnStartupTimeoutMillis(): number;
    getStaleFetcherDelaySeconds(): number;
    getStaleFetcherTimeoutSeconds(): number;
    getStartupTimeoutMillis(): number;
    getTikaConfig(): Path[];
    getTimeoutMillis(): number;
    setForkedJvmArgs(arg0: string[]): void;
    setJavaPath(arg0: string): void;
    setMaxFilesProcessedPerProcess(arg0: number): void;
    setMaxForEmitBatchBytes(arg0: number): void;
    setNumClients(arg0: number): void;
    setShutdownClientAfterMillis(arg0: number): void;
    setSleepOnStartupTimeoutMillis(arg0: number): void;
    setStaleFetcherDelaySeconds(arg0: number): void;
    setStaleFetcherTimeoutSeconds(arg0: number): void;
    setStartupTimeoutMillis(arg0: number): void;
    setTikaConfig(arg0: Path[]): void;
    setTikaConfig(arg0: string): void;
    setTimeoutMillis(arg0: number): void;
}