import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Copyable<T extends Object | number | string | boolean> extends Object{
    copy(): T;
}