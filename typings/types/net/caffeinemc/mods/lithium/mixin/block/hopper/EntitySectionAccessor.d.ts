import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface EntitySectionAccessor<T extends unknown> extends Object{
    getCollection(): T[];
}