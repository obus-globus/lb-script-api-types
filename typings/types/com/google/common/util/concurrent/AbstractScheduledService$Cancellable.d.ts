import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AbstractScheduledService$Cancellable extends Object{
    cancel(mayInterruptIfRunning: boolean): void;
    isCancelled(): boolean;
}