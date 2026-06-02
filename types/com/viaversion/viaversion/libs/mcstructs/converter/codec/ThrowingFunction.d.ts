import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ThrowingFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    apply(arg0: T): R;
}