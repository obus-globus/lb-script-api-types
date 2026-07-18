import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigLoader$Companion extends Object {
    load(path: string | null): ApplicationConfig;
    loadAll(...configPaths: string[]): ApplicationConfig;
    // private loadDefault(): ApplicationConfig | null;
}