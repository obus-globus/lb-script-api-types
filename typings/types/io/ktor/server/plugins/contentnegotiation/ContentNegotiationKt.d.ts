import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { RouteScopedPlugin } from '../../../../../io/ktor/server/application/RouteScopedPlugin.d.ts'
import type { ContentNegotiationConfig } from '../../../../../io/ktor/server/plugins/contentnegotiation/ContentNegotiationConfig.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class ContentNegotiationKt extends Object {
    static getContentNegotiation(): RouteScopedPlugin<ContentNegotiationConfig>;
    static getLOGGER(): Logger;
    static suitableCharset(self: ApplicationCall, defaultCharset: Charset): Charset;
}