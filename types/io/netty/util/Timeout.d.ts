import type { Timer } from '../../../io/netty/util/Timer.d.ts'
import type { TimerTask } from '../../../io/netty/util/TimerTask.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Timeout extends Object{
    cancel(): boolean;
    isCancelled(): boolean;
    isExpired(): boolean;
    task(): TimerTask;
    timer(): Timer;
}