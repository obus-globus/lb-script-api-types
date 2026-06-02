import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class LimitedDispatcherKt extends Object {
    static checkParallelism(paramarg0: number): void;
    static namedOrThis(paramarg0: CoroutineDispatcher, paramarg1: string): CoroutineDispatcher;
}