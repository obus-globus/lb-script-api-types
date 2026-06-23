import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Norm<C extends unknown, R extends unknown> extends Object{
    get(arg0: C): R;
}