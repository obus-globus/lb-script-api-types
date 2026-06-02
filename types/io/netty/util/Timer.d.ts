import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { TimerTask } from '../../../io/netty/util/TimerTask.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Timer extends Object{
    newTimeout(arg0: TimerTask, arg1: number, arg2: TimeUnit): Timeout;
    stop(): Timeout[];
}