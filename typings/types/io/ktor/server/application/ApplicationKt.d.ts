import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ServerConfig } from '../../../../io/ktor/server/application/ServerConfig.d.ts'
import type { ServerConfigBuilder } from '../../../../io/ktor/server/application/ServerConfigBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ApplicationKt extends Object {
    static getLog(paramarg0: Application): Logger;
    static serverConfig(environment: ApplicationEnvironment, block: (param0: ServerConfigBuilder) => void): ServerConfig;
}