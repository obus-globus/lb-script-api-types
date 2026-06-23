import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LerpFunction<T extends unknown> extends Object{
    apply(alpha: number, from: T, to: T): T;
}