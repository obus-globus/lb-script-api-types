import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface EntitySectionAccessor<T extends Object | number | string | boolean> extends Object{
    getCollection(): T[];
}