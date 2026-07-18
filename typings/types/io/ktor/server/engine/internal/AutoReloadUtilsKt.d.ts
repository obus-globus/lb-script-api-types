import type { Application } from '../../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEnvironment } from '../../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { WatchEvent$Modifier } from '../../../../../java/nio/file/WatchEvent$Modifier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../../../kotlin/reflect/KFunction.d.ts'
import type { KParameter } from '../../../../../kotlin/reflect/KParameter.d.ts'
export class AutoReloadUtilsKt extends Object {
    static bestFunction<R extends unknown>(self: KFunction<R>[]): KFunction<R> | null;
    static getApplicationClassInstance(): Class<Application>;
    static getApplicationEnvironmentClassInstance(): Class<ApplicationEnvironment>;
    static getCurrentStartupModules(): ThreadLocal<string[]>;
    static get_com_sun_nio_file_SensitivityWatchEventModifier_HIGH(): WatchEvent$Modifier | null;
    static isApplicableFunction(self: KFunction<Object>): boolean;
    static isApplication(parameter: KParameter): boolean;
    static isApplicationEnvironment(parameter: KParameter): boolean;
    static isParameterOfType(parameter: KParameter, type: Class<Object>): boolean;
    static loadClassOrNull(self: ClassLoader, name: string): Class<Object> | null;
    static takeIfNotFacade(self: Class<Object>): KClass<Object> | null;
}