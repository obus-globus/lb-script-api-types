import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$ReadChannelContent } from '../../../../../io/ktor/http/content/OutgoingContent$ReadChannelContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ExceptionPageContent extends OutgoingContent$ReadChannelContent {
    constructor(call: ApplicationCall, cause: Throwable)
    // private responsePage: string;
    readonly status: HttpStatusCode;
    readFrom(): ByteReadChannel;
    readFrom(range: { start: number; endInclusive: number; step: number }): ByteReadChannel;
}