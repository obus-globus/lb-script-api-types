import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AtomicBoolean } from '../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class StreamFlow<T extends Object | number | string | boolean> extends Object implements Flow<T> {
    constructor(stream: Stream<T>)
    collect(collector: FlowCollector<T>): void;
}