import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
export interface LootDataType$ContextGetter<T extends unknown> extends Object{
    context(value: T): ContextKeySet;
}