import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ClassInstanceMultiMapAccessor<T extends Object | number | string | boolean> extends Object{
    getAllInstances(): T[];
}