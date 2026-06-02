import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LerpFunction<T extends Object | number | string | boolean> extends Object{
    apply(alpha: number, from: T, to: T): T;
}