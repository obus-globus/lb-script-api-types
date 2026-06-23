import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ClassInstanceMultiMapAccessor<T extends unknown> extends Object{
    getAllInstances(): T[];
}