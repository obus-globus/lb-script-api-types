import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class StreamKt extends Object {
    static consumeAsFlow<T extends unknown>(self: Stream<T>): Flow<T>;
}