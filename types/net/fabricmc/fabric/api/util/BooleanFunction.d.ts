import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanFunction<R extends Object | number | string | boolean> extends Object{
    apply(arg0: boolean): R;
}