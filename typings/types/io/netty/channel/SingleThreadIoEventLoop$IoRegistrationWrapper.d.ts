import type { IoOps } from '../../../io/netty/channel/IoOps.d.ts'
import type { IoRegistration } from '../../../io/netty/channel/IoRegistration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SingleThreadIoEventLoop$IoRegistrationWrapper extends Object implements IoRegistration {
    constructor(null_: (Object | null)[], arg1: IoRegistration)
    // private registration: IoRegistration;
    attachment<T extends unknown>(): T;
    cancel(): boolean;
    isValid(): boolean;
    submit(arg0: IoOps): number;
}