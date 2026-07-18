import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ApplicationEnvironmentBuilder extends Object {
    constructor()
    classLoader: ClassLoader;
    config: ApplicationConfig;
    log: Logger;
    build(): ApplicationEnvironment;
}