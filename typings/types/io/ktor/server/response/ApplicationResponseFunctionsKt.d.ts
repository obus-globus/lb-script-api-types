import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { URLBuilder } from '../../../../io/ktor/http/URLBuilder.d.ts'
import type { Url } from '../../../../io/ktor/http/Url.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RawSource } from '../../../../kotlinx/io/RawSource.d.ts'
export class ApplicationResponseFunctionsKt extends Object {
    static defaultTextContentType(self: ApplicationCall, contentType: ContentType | null): ContentType;
    static respond<T extends unknown>(self: ApplicationCall, message: T): void;
    static respond(self: ApplicationCall, status: HttpStatusCode, message: Object | null, messageType: TypeInfo): void;
    static respondBytes(self: ApplicationCall, bytes: number[], contentType: ContentType | null, status: HttpStatusCode | null, configure: (param0: OutgoingContent) => void): void;
    static respondBytes(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, provider: () => number[]): void;
    static respondBytesWriter(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, contentLength: number | null, producer: (param0: ByteWriteChannel) => void): void;
    static respondNullable<T extends unknown>(self: ApplicationCall, message: T): void;
    static respondNullable<T extends unknown>(self: ApplicationCall, status: HttpStatusCode, message: T): void;
    static respondRedirect(self: ApplicationCall, permanent: boolean, block: (param0: URLBuilder) => void): void;
    static respondRedirect(self: ApplicationCall, url: Url, permanent: boolean): void;
    static respondRedirect(self: ApplicationCall, url: string, permanent: boolean): void;
    static respondSource(self: ApplicationCall, source: RawSource, contentType: ContentType | null, status: HttpStatusCode | null, contentLength: number | null): void;
    static respondText(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, provider: () => string): void;
    static respondText(self: ApplicationCall, text: string, contentType: ContentType | null, status: HttpStatusCode | null, configure: (param0: OutgoingContent) => void): void;
    static respondWithType<T extends unknown>(self: ApplicationCall, status: HttpStatusCode, message: T): void;
}