import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
export interface FabricComponentMapBuilder extends Object {
    contains(arg0: DataComponentType<Object>): boolean;
    getOrCreate<T extends Object | number | string | boolean>(arg0: DataComponentType<T>, arg1: () => T): T;
    getOrDefault<T extends Object | number | string | boolean>(arg0: DataComponentType<T>, arg1: T): T;
    getOrEmpty<T extends Object | number | string | boolean>(arg0: DataComponentType<T[]>): T[];
}