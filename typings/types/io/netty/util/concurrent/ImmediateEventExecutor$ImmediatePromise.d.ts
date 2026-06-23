import type { DefaultPromise } from '../../../../io/netty/util/concurrent/DefaultPromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmediateEventExecutor$ImmediatePromise<V extends unknown> extends DefaultPromise<V> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: (Object | null)[])
    checkDeadLock(): void;
}