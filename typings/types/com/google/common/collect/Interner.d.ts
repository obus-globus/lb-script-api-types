import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Interner<E extends Object | number | string | boolean> extends Object{
    intern(sample: E): E;
}