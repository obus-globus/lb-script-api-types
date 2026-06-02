import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
export class ThreadsKt extends Object {
    static thread(paramarg0: boolean, paramarg1: boolean, paramarg2: ClassLoader, paramarg3: string, paramarg4: number, paramarg5: Function0<void>): Thread;
}