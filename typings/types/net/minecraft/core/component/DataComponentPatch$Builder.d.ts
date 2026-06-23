import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentPatch } from '../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class DataComponentPatch$Builder extends Object {
    private constructor()
    // private map: Map<DataComponentType<Object>, Optional<Object>>;
    build(): DataComponentPatch;
    remove<T extends unknown>(type: DataComponentType<T>): DataComponentPatch$Builder;
    set(components: TypedDataComponent<Object>[]): DataComponentPatch$Builder;
    set<T extends unknown>(type: DataComponentType<T>, value: T): DataComponentPatch$Builder;
    set<T extends unknown>(component: TypedDataComponent<T>): DataComponentPatch$Builder;
}