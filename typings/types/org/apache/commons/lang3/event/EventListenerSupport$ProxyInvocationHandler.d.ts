import type { InvocationHandler } from '../../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { EventListenerSupport } from '../../../../../org/apache/commons/lang3/event/EventListenerSupport.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
export class EventListenerSupport$ProxyInvocationHandler extends Object implements InvocationHandler {
    static invokeDefault(paramarg0: Object, paramarg1: Method, paramarg2: (Object | null)[]): Object;
    constructor(null_: EventListenerSupport<L>)
    constructor(null_: EventListenerSupport<L>, arg1: (param0: Throwable) => void)
    // private handler: (param0: Throwable) => void;
    handle(arg0: Throwable): void;
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
}