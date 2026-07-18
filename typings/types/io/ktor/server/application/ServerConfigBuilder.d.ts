import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ServerConfig } from '../../../../io/ktor/server/application/ServerConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class ServerConfigBuilder extends Object {
    constructor(environment: ApplicationEnvironment)
    developmentMode: boolean;
    readonly environment: ApplicationEnvironment;
    // private modules: (param0: Application) => void[];
    /*not mapped: */ getModules$ktor_server_core(): (param0: Application) => void[];
    parentCoroutineContext: CoroutineContext;
    rootPath: string;
    watchPaths: string[];
    build(): ServerConfig;
    module(body: (param0: Application) => void): void;
}