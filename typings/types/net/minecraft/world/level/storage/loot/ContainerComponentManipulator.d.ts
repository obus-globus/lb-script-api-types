import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SlotCollection } from '../../../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
export interface ContainerComponentManipulator<T extends Object | number | string | boolean> extends Object {
    empty(): T;
    getContents(component: T): Stream<ItemStack>;
    getSlots(itemStack: ItemStack): SlotCollection;
    modifyItems(itemStack: ItemStack, modifier: (param0: ItemStack) => Object | null): void;
    setContents(component: T, newContents: Stream<ItemStack>): T;
    setContents(itemStack: ItemStack, defaultValue: T, newContents: Stream<ItemStack>): void;
    setContents(itemStack: ItemStack, newContents: Stream<ItemStack>): void;
    type(): DataComponentType<T>;
}