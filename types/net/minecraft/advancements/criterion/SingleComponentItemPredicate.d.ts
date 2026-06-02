import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
export interface SingleComponentItemPredicate<T extends Object | number | string | boolean> extends Object, DataComponentPredicate{
    componentType(): DataComponentType<T>;
    matches(value: T): boolean;
    matches(components: DataComponentGetter): boolean;
}