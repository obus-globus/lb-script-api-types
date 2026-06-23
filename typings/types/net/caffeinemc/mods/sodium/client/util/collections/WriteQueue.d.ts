import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface WriteQueue<E extends unknown> extends Object{
    enqueue(arg0: E): void;
    ensureCapacity(arg0: number): void;
    isEmpty(): boolean;
}