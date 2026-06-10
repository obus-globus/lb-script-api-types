import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface SlotCollection extends Object {
    filter(predicate: (param0: ItemStack) => boolean): SlotCollection;
    flatMap(mapper: (param0: ItemStack) => SlotCollection): SlotCollection;
    itemCopies(): Stream<ItemStack>;
    limit(limit: number): SlotCollection;
}