import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ApplicationEnvironmentImplJvm extends Object implements ApplicationEnvironment {
    constructor(classLoader: ClassLoader, log: Logger, config: ApplicationConfig, monitor: Events)
    readonly classLoader: ClassLoader;
    readonly config: ApplicationConfig;
    readonly log: Logger;
    readonly monitor: Events;
}