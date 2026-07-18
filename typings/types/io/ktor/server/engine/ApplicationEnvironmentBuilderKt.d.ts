import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ApplicationEnvironmentBuilder } from '../../../../io/ktor/server/engine/ApplicationEnvironmentBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationEnvironmentBuilderKt extends Object {
    static applicationEnvironment(block: (param0: ApplicationEnvironmentBuilder) => void): ApplicationEnvironment;
    static configure(self: ApplicationEnvironmentBuilder, ...configs: ApplicationConfig[]): void;
    static configure(self: ApplicationEnvironmentBuilder, ...configPaths: string[]): void;
}