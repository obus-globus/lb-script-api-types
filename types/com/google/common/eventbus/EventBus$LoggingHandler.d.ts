import type { SubscriberExceptionContext } from '../../../../com/google/common/eventbus/SubscriberExceptionContext.d.ts'
import type { SubscriberExceptionHandler } from '../../../../com/google/common/eventbus/SubscriberExceptionHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class EventBus$LoggingHandler extends Object implements SubscriberExceptionHandler {
    constructor()
    handleException(exception: Throwable, context: SubscriberExceptionContext): void;
}