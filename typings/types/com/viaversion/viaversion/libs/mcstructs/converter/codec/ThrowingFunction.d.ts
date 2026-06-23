import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ThrowingFunction<T extends unknown, R extends unknown> extends Object{
    apply(arg0: T): R;
}