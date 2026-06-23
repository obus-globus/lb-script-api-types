import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Interner<E extends unknown> extends Object{
    intern(sample: E): E;
}