import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ContentTypeWithQuality } from '../../../../../io/ktor/server/plugins/contentnegotiation/ContentTypeWithQuality.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContentNegotiationUtilsKt extends Object {
    static checkAcceptHeader(acceptItems: ContentTypeWithQuality[], contentType: ContentType | null): boolean;
    static parseAcceptHeader(self: ApplicationCall): ContentTypeWithQuality[];
}