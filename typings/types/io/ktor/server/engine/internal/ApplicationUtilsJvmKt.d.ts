import type { ApplicationConfig } from '../../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { EnginePipeline } from '../../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { Dispatchers } from '../../../../../kotlinx/coroutines/Dispatchers.d.ts'
export class ApplicationUtilsJvmKt extends Object {
    static availableProcessorsBridge(): number;
    static configureShutdownUrl(config: ApplicationConfig, pipeline: EnginePipeline): void;
    static getIOBridge(paramarg0: Dispatchers): CoroutineDispatcher;
    static printError(message: Object | null): void;
}