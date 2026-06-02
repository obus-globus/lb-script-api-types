import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ObjectPool$Handle<T extends Object | number | string | boolean> extends Object{
    recycle(arg0: T): void;
}