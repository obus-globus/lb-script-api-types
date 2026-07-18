import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConfigLoader extends Object{
    load(path: string | null): ApplicationConfig | null;
}