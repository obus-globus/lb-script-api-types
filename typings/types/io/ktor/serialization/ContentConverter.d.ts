import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent } from '../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { TypeInfo } from '../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export interface ContentConverter extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    deserialize(charset: Charset, typeInfo: TypeInfo, content: ByteReadChannel, $completion: Continuation<Object>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    serialize(contentType: ContentType, charset: Charset, typeInfo: TypeInfo, value: Object | null, $completion: Continuation<OutgoingContent>): any;
}