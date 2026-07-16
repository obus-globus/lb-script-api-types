import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { PipesConfigBase } from '../../../../org/apache/tika/pipes/PipesConfigBase.d.ts'
export class PipesConfig extends PipesConfigBase {
    static DEFAULT_MAX_FILES_PROCESSED_PER_PROCESS: number;
    static DEFAULT_MAX_FOR_EMIT_BATCH: number;
    static DEFAULT_NUM_CLIENTS: number;
    static DEFAULT_SHUTDOWN_CLIENT_AFTER_MILLS: number;
    static DEFAULT_STALE_FETCHER_DELAY_SECONDS: number;
    static DEFAULT_STALE_FETCHER_TIMEOUT_SECONDS: number;
    static DEFAULT_STARTUP_TIMEOUT_MILLIS: number;
    static DEFAULT_TIMEOUT_MILLIS: number;
    static load(paramarg0: InputStream): PipesConfig;
    static load(paramarg0: Path): PipesConfig;
    private constructor()
    readonly maxWaitForClientMillis: number;
    getMaxWaitForClientMillis(): number;
    setMaxWaitForClientMillis(arg0: number): void;
}