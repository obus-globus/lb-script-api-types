import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class BlockItemTracker extends Object implements RegistryEntryAddedCallback<Item> {
    static register(paramarg0: Item[]): void;
    private constructor()
    onEntryAdded(arg0: number, arg1: Identifier, arg2: Item): void;
}