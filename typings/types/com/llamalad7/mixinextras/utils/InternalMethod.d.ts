import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalMethod<O extends unknown, R extends unknown> extends Object{
    call(arg0: O, arg1: Object[]): R;
}