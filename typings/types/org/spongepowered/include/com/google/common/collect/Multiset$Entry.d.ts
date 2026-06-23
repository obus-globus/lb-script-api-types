import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Multiset$Entry<E extends unknown> extends Object{
    getCount(): number;
    getElement(): E;
}