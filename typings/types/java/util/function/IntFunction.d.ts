import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntFunction<R extends Object | number | string | boolean> extends Object{
    apply(arg0: number): R;
}