import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class CombineKt extends Object {
    static combineInternal<R extends unknown, T extends unknown>(self: FlowCollector<R>, flows: Flow<T>[], arrayFactory: () => (T | null)[] | null, transform: (param0: FlowCollector<R>, param1: T[]) => void): void;
    static zipImpl<R extends unknown, T1 extends unknown, T2 extends unknown>(flow: Flow<T1>, flow2: Flow<T2>, transform: (param0: T1, param1: T2) => R): Flow<R>;
}