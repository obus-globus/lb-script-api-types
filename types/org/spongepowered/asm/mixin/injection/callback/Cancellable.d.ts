import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Cancellable extends Object{
    cancel(): void;
    isCancellable(): boolean;
    isCancelled(): boolean;
}