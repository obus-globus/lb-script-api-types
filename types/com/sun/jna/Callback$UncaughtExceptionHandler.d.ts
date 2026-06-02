import type { Callback } from '../../../com/sun/jna/Callback.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface Callback$UncaughtExceptionHandler extends Object{
    uncaughtException(arg0: Callback, arg1: Throwable): void;
}