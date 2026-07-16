import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class LimitedDispatcherKt extends Object {
    static checkParallelism(self: number): void;
    static namedOrThis(self: CoroutineDispatcher, name: string | null): CoroutineDispatcher;
}