import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ServerConfig } from '../../../../io/ktor/server/application/ServerConfig.d.ts'
import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { ApplicationEngineFactory } from '../../../../io/ktor/server/engine/ApplicationEngineFactory.d.ts'
import type { EmbeddedServer } from '../../../../io/ktor/server/engine/EmbeddedServer.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class EmbeddedServerKt extends Object {
    static embeddedServer<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration>(factory: ApplicationEngineFactory<TEngine, TConfiguration>, port: number, host: string, watchPaths: string[], module: (param0: Application) => void): EmbeddedServer<TEngine, TConfiguration>;
    static embeddedServer<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration>(factory: ApplicationEngineFactory<TEngine, TConfiguration>, environment: ApplicationEnvironment, configure: (param0: TConfiguration) => void, module: (param0: Application) => void): EmbeddedServer<TEngine, TConfiguration>;
    static embeddedServer<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration>(factory: ApplicationEngineFactory<TEngine, TConfiguration>, rootConfig: ServerConfig, configure: (param0: TConfiguration) => void): EmbeddedServer<TEngine, TConfiguration>;
    static embeddedServer<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration>(self: CoroutineScope, factory: ApplicationEngineFactory<TEngine, TConfiguration>, port: number, host: string, watchPaths: string[], parentCoroutineContext: CoroutineContext, module: (param0: Application) => void): EmbeddedServer<TEngine, TConfiguration>;
    static embeddedServer<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration>(self: CoroutineScope, factory: ApplicationEngineFactory<TEngine, TConfiguration>, connectors: EngineConnectorConfig[], watchPaths: string[], parentCoroutineContext: CoroutineContext, module: (param0: Application) => void): EmbeddedServer<TEngine, TConfiguration>;
}