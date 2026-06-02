import type { Object } from '../../../java/lang/Object.d.ts'
import type { MainCoroutineDispatcher } from '../../../kotlinx/coroutines/MainCoroutineDispatcher.d.ts'
import type { MainDispatcherFactory } from '../../../kotlinx/coroutines/internal/MainDispatcherFactory.d.ts'
export class MissingMainCoroutineDispatcherFactory extends Object implements MainDispatcherFactory {
    static INSTANCE: MissingMainCoroutineDispatcherFactory;
    readonly loadPriority: number;
    createDispatcher(allFactories: MainDispatcherFactory[]): MainCoroutineDispatcher;
    hintOnError(): string | null;
}