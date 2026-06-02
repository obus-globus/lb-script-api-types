import type { Object } from '../../../java/lang/Object.d.ts'
import type { MainCoroutineDispatcher } from '../../../kotlinx/coroutines/MainCoroutineDispatcher.d.ts'
export interface MainDispatcherFactory extends Object{
    readonly loadPriority: number;
    createDispatcher(allFactories: MainDispatcherFactory[]): MainCoroutineDispatcher;
    hintOnError(): string | null;
}