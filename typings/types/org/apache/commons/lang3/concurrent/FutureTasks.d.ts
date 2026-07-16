import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { FutureTask } from '../../../../../java/util/concurrent/FutureTask.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FutureTasks extends Object {
    static run<V extends unknown>(paramarg0: () => V): FutureTask<V>;
    private constructor()
}