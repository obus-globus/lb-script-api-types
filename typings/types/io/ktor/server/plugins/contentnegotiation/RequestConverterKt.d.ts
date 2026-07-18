import type { PluginBuilder } from '../../../../../io/ktor/server/application/PluginBuilder.d.ts'
import type { ContentNegotiationConfig } from '../../../../../io/ktor/server/plugins/contentnegotiation/ContentNegotiationConfig.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RequestConverterKt extends Object {
    static convertRequestBody(self: PluginBuilder<ContentNegotiationConfig>): void;
}