import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class StreamKt extends Object {
    static consumeAsFlow(paramarg0: Stream<Object>): Flow<Object>;
}