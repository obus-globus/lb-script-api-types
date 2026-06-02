import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LifeCycle } from '../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
export interface LifeCycle2 extends Object, LifeCycle{
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}