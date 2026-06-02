import type { Object } from '../../../java/lang/Object.d.ts'
export interface LongFunction<R extends Object | number | string | boolean> extends Object{
    apply(arg0: number): R;
}