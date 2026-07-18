import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationModuleLoader } from '../../../../io/ktor/server/application/ApplicationModuleLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationModules_jvmKt extends Object {
    static getLoadConcurrently(): ApplicationModuleLoader;
    static getLoadSequentially(): ApplicationModuleLoader;
    static getModuleLoader(paramarg0: ApplicationEnvironment): ApplicationModuleLoader;
}