import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
export interface DataComponentPredicate extends Object{
    matches(components: DataComponentGetter): boolean;
}