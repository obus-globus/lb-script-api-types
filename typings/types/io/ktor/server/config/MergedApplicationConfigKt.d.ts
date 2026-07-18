import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MergedApplicationConfigKt extends Object {
    static merge(self: ApplicationConfig[]): ApplicationConfig;
    static mergeWith(self: ApplicationConfig, other: ApplicationConfig): ApplicationConfig;
    static withFallback(self: ApplicationConfig, other: ApplicationConfig): ApplicationConfig;
}