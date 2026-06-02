import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Thread$Builder } from '../../java/lang/Thread$Builder.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface Thread$Builder$OfVirtual extends Thread$Builder, Object{
    inheritInheritableThreadLocals(arg0: boolean): Thread$Builder$OfVirtual;
    name(arg0: string): Thread$Builder$OfVirtual;
    name(arg0: string, arg1: number): Thread$Builder$OfVirtual;
    uncaughtExceptionHandler(arg0: (param0: Thread, param1: Throwable) => void): Thread$Builder$OfVirtual;
}