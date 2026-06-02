import type { SubscriberExceptionContext } from '../../../../com/google/common/eventbus/SubscriberExceptionContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface SubscriberExceptionHandler extends Object{
    handleException(exception: Throwable, context: SubscriberExceptionContext): void;
}