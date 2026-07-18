import type { TypeInfo } from '../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export interface WebsocketContentConverter extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    deserialize(charset: Charset, typeInfo: TypeInfo, content: Frame, $completion: Continuation<Object>): any;
    isApplicable(frame: Frame): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    serialize(charset: Charset, typeInfo: TypeInfo, value: Object | null, $completion: Continuation<Frame>): any;
}