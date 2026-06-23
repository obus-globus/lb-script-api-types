import type { Callable } from '../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CrashReportDetail<V extends unknown> extends Callable<V>, Object{
}