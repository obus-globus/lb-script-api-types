import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InCommandFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    apply(t: T): R;
}