import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TimerTask extends Object{
    cancelled(arg0: Timeout): void;
    run(arg0: Timeout): void;
}