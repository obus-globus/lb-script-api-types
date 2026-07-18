import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HoconApplicationConfigKt extends Object {
    static ApplicationConfig(configPath: string | null): ApplicationConfig;
    static tryGetString(self: Config, path: string): string | null;
    static tryGetStringList(self: Config, path: string): string[] | null;
}