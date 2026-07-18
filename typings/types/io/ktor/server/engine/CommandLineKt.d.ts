import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { ApplicationEngine$Configuration } from '../../../../io/ktor/server/engine/ApplicationEngine$Configuration.d.ts'
import type { CommandLineConfig } from '../../../../io/ktor/server/engine/CommandLineConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
export class CommandLineKt extends Object {
    static CommandLineConfig(args: string[]): CommandLineConfig;
    static buildApplicationConfig(args: Pair<string, string>[]): ApplicationConfig;
    static loadCommonConfiguration(self: ApplicationEngine$Configuration, deploymentConfig: ApplicationConfig): void;
    static splitPair(self: string, ch: string): Pair<string, string> | null;
}