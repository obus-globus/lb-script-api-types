import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntFunction<R extends unknown> extends Object{
    apply(arg0: number): R;
}