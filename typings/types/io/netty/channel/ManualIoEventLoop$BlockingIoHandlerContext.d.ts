import type { IoHandlerContext } from '../../../io/netty/channel/IoHandlerContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ManualIoEventLoop$BlockingIoHandlerContext extends Object implements IoHandlerContext {
    constructor(null_: (Object | null)[], arg1: IoHandlerContext)
    // private maxBlockingNanos: number;
    canBlock(): boolean;
    deadlineNanos(): number;
    delayNanos(arg0: number): number;
    reportActiveIoTime(arg0: number): void;
    shouldReportActiveIoTime(): boolean;
}