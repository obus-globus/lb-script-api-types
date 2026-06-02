import type { Dispatcher } from '../../../../com/google/common/eventbus/Dispatcher.d.ts'
import type { SubscriberExceptionContext } from '../../../../com/google/common/eventbus/SubscriberExceptionContext.d.ts'
import type { SubscriberExceptionHandler } from '../../../../com/google/common/eventbus/SubscriberExceptionHandler.d.ts'
import type { SubscriberRegistry } from '../../../../com/google/common/eventbus/SubscriberRegistry.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class EventBus extends Object {
    constructor()
    constructor(exceptionHandler: SubscriberExceptionHandler)
    constructor(identifier: string)
    constructor(identifier: string, executor: Executor, dispatcher: Dispatcher, exceptionHandler: SubscriberExceptionHandler)
    // private dispatcher: Dispatcher;
    // private exceptionHandler: SubscriberExceptionHandler;
    // private executor: Executor;
    // private identifier: string;
    // private subscribers: SubscriberRegistry;
    executor(): Executor;
    handleSubscriberException(e: Throwable, context: SubscriberExceptionContext): void;
    identifier(): string;
    post(event: Object): void;
    register(object: Object): void;
    toString(): string;
    unregister(object: Object): void;
}