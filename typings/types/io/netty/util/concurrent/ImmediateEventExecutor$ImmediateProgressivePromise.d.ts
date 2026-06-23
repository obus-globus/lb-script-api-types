import type { DefaultProgressivePromise } from '../../../../io/netty/util/concurrent/DefaultProgressivePromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmediateEventExecutor$ImmediateProgressivePromise<V extends unknown> extends DefaultProgressivePromise<V> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: (Object | null)[])
    checkDeadLock(): void;
}