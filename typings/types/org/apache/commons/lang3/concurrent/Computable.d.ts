import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Computable<I extends unknown, O extends unknown> extends Object{
    compute(arg0: I): O;
}