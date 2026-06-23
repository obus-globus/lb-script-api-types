import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanFunction<R extends unknown> extends Object{
    apply(arg0: boolean): R;
}