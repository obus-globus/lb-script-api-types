import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricComponentMapBuilder } from '../../../../net/fabricmc/fabric/api/item/v1/FabricComponentMapBuilder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class DataComponentMap$Builder extends Object implements FabricComponentMapBuilder {
    private constructor()
    // private map: Map<DataComponentType<Object>, Object>;
    // private validator: (param0: TypedDataComponent<Object>[]) => void;
    addAll(map: TypedDataComponent<Object>[]): DataComponentMap$Builder;
    addValidator(newValidator: (param0: TypedDataComponent<Object>[]) => void): DataComponentMap$Builder;
    build(): TypedDataComponent<Object>[];
    contains(arg0: DataComponentType<Object>): boolean;
    getOrCreate<T extends Object | number | string | boolean>(arg0: DataComponentType<T>, arg1: () => T): T;
    getOrCreate(arg0: DataComponentType<Object>, arg1: () => Object): Object;
    getOrDefault<T extends Object | number | string | boolean>(arg0: DataComponentType<T>, arg1: T): T;
    getOrEmpty<T extends Object | number | string | boolean>(arg0: DataComponentType<T[]>): T[];
    getOrEmpty(arg0: DataComponentType<Object>): (Object | null)[];
    set<T extends Object | number | string | boolean>(type: DataComponentType<T>, value: T): DataComponentMap$Builder;
    setUnchecked<T extends Object | number | string | boolean>(type: DataComponentType<T>, value: Object): void;
}