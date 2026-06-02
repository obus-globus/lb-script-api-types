import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Multiset$Entry<E extends Object | number | string | boolean> extends Object{
    getCount(): number;
    getElement(): E;
}