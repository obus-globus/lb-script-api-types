import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ObjectConstructor<T extends Object | number | string | boolean> extends Object{
    construct(): T;
}