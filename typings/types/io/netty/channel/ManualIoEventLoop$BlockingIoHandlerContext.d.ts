import type { ManualIoEventLoop$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { IoHandlerContext } from '../../../io/netty/channel/IoHandlerContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ManualIoEventLoop$BlockingIoHandlerContext extends Object implements IoHandlerContext {
    private constructor(null_: (Object | null)[])
    constructor(null_: (Object | null)[], arg1: ManualIoEventLoop$1)
    // private maxBlockingNanos: number;
    canBlock(): boolean;
    deadlineNanos(): number;
    delayNanos(arg0: number): number;
    reportActiveIoTime(arg0: number): void;
    shouldReportActiveIoTime(): boolean;
}