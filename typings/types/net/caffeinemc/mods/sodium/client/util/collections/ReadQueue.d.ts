import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ReadQueue<E extends Object | number | string | boolean> extends Object{
    dequeue(): E;
}