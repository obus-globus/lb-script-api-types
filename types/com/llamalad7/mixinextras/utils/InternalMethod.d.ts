import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalMethod<O extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    call(arg0: O, arg1: Object[]): R;
}