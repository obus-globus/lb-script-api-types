import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Builder<T extends Object | number | string | boolean> extends Object{
    build(): T;
}