import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Converter<A extends unknown, B extends unknown> extends Object{
    applyFrom(arg0: B): A;
    applyTo(arg0: A): B;
}