import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UncaughtExceptionHandlers extends Object {
    static systemExit(): (param0: Thread, param1: Throwable) => void;
    private constructor()
}