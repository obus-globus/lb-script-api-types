import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToFloatFunction<T extends unknown> extends Object{
    applyAsFloat(value: T): number;
}