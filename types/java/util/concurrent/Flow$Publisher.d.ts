import type { Flow$Subscriber } from '../../../java/util/concurrent/Flow$Subscriber.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Flow$Publisher<T extends Object | number | string | boolean> extends Object{
    subscribe(arg0: Flow$Subscriber<T>): void;
}