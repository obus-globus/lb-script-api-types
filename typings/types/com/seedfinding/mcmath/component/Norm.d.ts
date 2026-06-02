import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Norm<C extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    get(arg0: C): R;
}