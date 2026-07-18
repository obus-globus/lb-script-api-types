import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ServerConfig } from '../../../../io/ktor/server/application/ServerConfig.d.ts'
import type { BaseApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/BaseApplicationEngine$Configuration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CommandLineConfig extends Object {
    constructor(rootConfig: ServerConfig, engineConfig: BaseApplicationEngine$Configuration)
    readonly engineConfig: BaseApplicationEngine$Configuration;
    readonly environment: ApplicationEnvironment;
    readonly rootConfig: ServerConfig;
}