import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationStartupMode } from '../../../../io/ktor/server/application/ApplicationStartupMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationModulesKt extends Object {
    static getModuleConfigReferences(paramarg0: ApplicationEnvironment): string[];
    static getStartupMode(paramarg0: ApplicationEnvironment): ApplicationStartupMode;
    static getStartupTimeout(paramarg0: ApplicationEnvironment): number;
}