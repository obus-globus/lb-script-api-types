import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
export interface LootDataType$ContextGetter<T extends Object | number | string | boolean> extends Object{
    context(value: T): ContextKeySet;
}