import type { Object } from '../../../java/lang/Object.d.ts'
export interface Supplier<T extends Object | number | string | boolean> extends Object{
    get(): T;
}