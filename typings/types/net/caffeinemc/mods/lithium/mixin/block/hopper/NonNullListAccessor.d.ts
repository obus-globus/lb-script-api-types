import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface NonNullListAccessor<T extends Object | number | string | boolean> extends Object{
    getDelegate(): T[];
}