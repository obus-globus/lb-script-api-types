import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelIterator<E extends unknown> extends Object{
    hasNext(): boolean;
    next(): E;
    next0(): E;
}