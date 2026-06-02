import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToFloatFunction<T extends Object | number | string | boolean> extends Object{
    applyAsFloat(value: T): number;
}