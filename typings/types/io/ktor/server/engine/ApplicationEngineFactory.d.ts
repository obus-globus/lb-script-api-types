import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ApplicationEngineFactory<TEngine extends ApplicationEngine, TConfiguration extends ApplicationEngine$Configuration> extends Object {
    configuration(configure: (param0: TConfiguration) => void): TConfiguration;
    create(environment: ApplicationEnvironment, monitor: Events, developmentMode: boolean, configuration: TConfiguration, applicationProvider: () => Application): TEngine;
}