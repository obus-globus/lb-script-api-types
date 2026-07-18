import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationRootConfigBridge } from '../../../../io/ktor/server/application/ApplicationRootConfigBridge.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class ServerConfig extends Object {
    constructor(environment: ApplicationEnvironment, modules: (param0: Application) => void[], watchPaths: string[], rootPath: string, developmentMode: boolean, parentCoroutineContext: CoroutineContext)
    // private bridge: ApplicationRootConfigBridge;
    readonly developmentMode: boolean;
    readonly environment: ApplicationEnvironment;
    // private modules: (param0: Application) => void[];
    /*not mapped: */ getModules$ktor_server_core(): (param0: Application) => void[];
    readonly parentCoroutineContext: CoroutineContext;
    readonly rootPath: string;
    // private watchPaths: string[];
    /*not mapped: */ getWatchPaths$ktor_server_core(): string[];
}