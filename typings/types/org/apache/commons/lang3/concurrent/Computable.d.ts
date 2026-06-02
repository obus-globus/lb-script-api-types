import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Computable<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Object{
    compute(arg0: I): O;
}