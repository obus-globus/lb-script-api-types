import type { ApplicationPlugin } from '../../../../../io/ktor/server/application/ApplicationPlugin.d.ts'
import type { PluginBuilder } from '../../../../../io/ktor/server/application/PluginBuilder.d.ts'
import type { CORSConfig } from '../../../../../io/ktor/server/plugins/cors/CORSConfig.d.ts'
import type { ApplicationRequest } from '../../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class CORSKt extends Object {
    static buildPlugin(self: PluginBuilder<CORSConfig>): void;
    static getCORS(): ApplicationPlugin<CORSConfig>;
    static getLOGGER(): Logger;
    static id(self: ApplicationRequest): string;
}