import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Converter<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object{
    applyFrom(arg0: B): A;
    applyTo(arg0: A): B;
}