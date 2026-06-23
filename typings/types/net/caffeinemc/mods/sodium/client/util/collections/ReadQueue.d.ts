import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ReadQueue<E extends unknown> extends Object{
    dequeue(): E;
}