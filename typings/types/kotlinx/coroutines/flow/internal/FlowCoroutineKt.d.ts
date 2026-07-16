import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowCoroutineKt extends Object {
    static flowScope<R extends unknown>(block: (param0: CoroutineScope) => R): R;
    static scopedFlow<R extends unknown>(block: (param0: CoroutineScope, param1: FlowCollector<R>) => void): Flow<R>;
}