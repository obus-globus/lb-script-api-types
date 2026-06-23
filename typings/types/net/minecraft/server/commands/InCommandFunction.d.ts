import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InCommandFunction<T extends unknown, R extends unknown> extends Object{
    apply(t: T): R;
}