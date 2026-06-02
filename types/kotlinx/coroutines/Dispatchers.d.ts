import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { MainCoroutineDispatcher } from '../../kotlinx/coroutines/MainCoroutineDispatcher.d.ts'
export class Dispatchers extends Object {
    static INSTANCE: Dispatchers;
    static getDefault(): CoroutineDispatcher;
    static getIO(): CoroutineDispatcher;
    static getMain(): MainCoroutineDispatcher;
    static getUnconfined(): CoroutineDispatcher;
    // private Default: CoroutineDispatcher;
    /*not mapped: */ getDefault(): CoroutineDispatcher;
    /*not mapped: */ getIO(): CoroutineDispatcher;
    /*not mapped: */ getMain(): MainCoroutineDispatcher;
    // private Unconfined: CoroutineDispatcher;
    /*not mapped: */ getUnconfined(): CoroutineDispatcher;
    shutdown(): void;
}