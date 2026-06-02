import type { Object } from '../../../java/lang/Object.d.ts'
export interface DoubleFunction<R extends Object | number | string | boolean> extends Object{
    apply(arg0: number): R;
}