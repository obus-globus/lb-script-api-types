import type { Object } from '../../../java/lang/Object.d.ts'
import type { MainCoroutineDispatcher } from '../../../kotlinx/coroutines/MainCoroutineDispatcher.d.ts'
export class MainDispatcherLoader extends Object {
    static INSTANCE: MainDispatcherLoader;
    static dispatcher: MainCoroutineDispatcher;
    // private FAST_SERVICE_LOADER_ENABLED: boolean;
    dispatcher: MainCoroutineDispatcher;
    // private loadMainDispatcher(): MainCoroutineDispatcher;
}