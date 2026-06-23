import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface NonNullListAccessor<T extends unknown> extends Object{
    getDelegate(): T[];
}