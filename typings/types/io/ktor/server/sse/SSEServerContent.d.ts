import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent$WriteChannelContent } from '../../../../io/ktor/http/content/OutgoingContent$WriteChannelContent.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ServerSSESession } from '../../../../io/ktor/server/sse/ServerSSESession.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class SSEServerContent extends OutgoingContent$WriteChannelContent {
    constructor(call: ApplicationCall, handle: (param0: ServerSSESession) => void)
    constructor(call: ApplicationCall, handle: (param0: ServerSSESession) => void, serialize?: ((param0: TypeInfo, param1: Object) => string) | null)
    readonly call: ApplicationCall;
    readonly contentType: ContentType;
    readonly handle: (param0: ServerSSESession) => void;
    readonly serialize: ((param0: TypeInfo, param1: Object) => string) | null;
    toString(): string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    writeTo(channel: ByteWriteChannel, $completion: Continuation<void>): any;
}