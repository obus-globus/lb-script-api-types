import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Cleaner$Cleanable } from '../../../java/lang/ref/Cleaner$Cleanable.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { CleanerImpl } from '../../../jdk/internal/ref/CleanerImpl.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Cleaner extends Object {
    static create(): Cleaner;
    static create(paramarg0: ThreadFactory): Cleaner;
    private constructor()
    // private impl: CleanerImpl;
    register(arg0: Object, arg1: () => void): Cleaner$Cleanable;
}