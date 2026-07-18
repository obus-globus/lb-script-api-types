import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { ModuleParametersInjector } from '../../../../../io/ktor/server/application/ModuleParametersInjector.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CallableUtilsKt extends Object {
    static executeModuleFunction(classLoader: ClassLoader, fqName: string, application: Application, moduleInjector: ModuleParametersInjector): void;
}