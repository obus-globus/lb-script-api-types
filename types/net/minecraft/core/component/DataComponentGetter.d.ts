import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export interface DataComponentGetter extends Object{
    get<T extends Object | number | string | boolean>(type: DataComponentType<T>): T;
    getOrDefault<T extends Object | number | string | boolean>(type: DataComponentType<T>, defaultValue: T): T;
    getTyped(type: DataComponentType<T>): TypedDataComponent<T>;
}