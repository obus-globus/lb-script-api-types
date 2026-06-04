import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export interface DataComponentHolder extends Object, DataComponentGetter{
    get<T extends Object | number | string | boolean>(type: DataComponentType<T>): T;
    getAllOfType(valueClass: Class<T>): Stream<T>;
    getComponents(): TypedDataComponent<Object>[];
    getOrDefault<T extends Object | number | string | boolean>(type: DataComponentType<T>, defaultValue: T): T;
    getTyped(type: DataComponentType<T>): TypedDataComponent<T>;
    has(type: DataComponentType<Object>): boolean;
}