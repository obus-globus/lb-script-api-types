import type { Object } from '../../../java/lang/Object.d.ts'
import type { MainCoroutineDispatcher } from '../../../kotlinx/coroutines/MainCoroutineDispatcher.d.ts'
import type { MainDispatcherFactory } from '../../../kotlinx/coroutines/internal/MainDispatcherFactory.d.ts'
export class MainDispatchersKt extends Object {
    static isMissing(self: MainCoroutineDispatcher): boolean;
    static throwMissingMainDispatcherException(): void;
    static tryCreateDispatcher(self: MainDispatcherFactory, factories: MainDispatcherFactory[]): MainCoroutineDispatcher;
}