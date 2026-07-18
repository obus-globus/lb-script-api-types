import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ApplicationConfigValue } from '../../../../io/ktor/server/config/ApplicationConfigValue.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationConfigKt extends Object {
    static getAs<E extends unknown>(self: ApplicationConfig): E;
    static getAs<E extends unknown>(self: ApplicationConfigValue): E;
    static getAs(self: ApplicationConfig, type: TypeInfo): Object | null;
    static property<E extends unknown>(self: Application, key: string): E;
    static propertyOrNull<E extends unknown>(self: Application, key: string): E | null;
    static tryGetString(self: ApplicationConfig, key: string): string | null;
    static tryGetStringList(self: ApplicationConfig, key: string): string[] | null;
}