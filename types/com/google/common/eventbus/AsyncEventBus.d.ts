import type { EventBus } from '../../../../com/google/common/eventbus/EventBus.d.ts'
import type { SubscriberExceptionHandler } from '../../../../com/google/common/eventbus/SubscriberExceptionHandler.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
export class AsyncEventBus extends EventBus {
    constructor(executor: Executor)
    constructor(executor: Executor, subscriberExceptionHandler: SubscriberExceptionHandler)
    constructor(identifier: string, executor: Executor)
}