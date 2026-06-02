import type { Flow$Subscription } from '../../../java/util/concurrent/Flow$Subscription.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface Flow$Subscriber<T extends Object | number | string | boolean> extends Object{
    onComplete(): void;
    onError(arg0: Throwable): void;
    onNext(arg0: T): void;
    onSubscribe(arg0: Flow$Subscription): void;
}