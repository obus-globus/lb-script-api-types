import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { Holder$Reference } from '../../../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class BlockItemTracker extends Object implements RegistryEntryAddedCallback<Item> {
    static allEntries<T extends unknown>(paramarg0: T[], paramarg1: (param0: Holder$Reference<T>) => void): void;
    static event<T extends unknown>(paramarg0: T[]): Event<(param0: number, param1: Identifier, param2: T) => void>;
    static register(paramarg0: Item[]): void;
    private constructor()
    onEntryAdded(arg0: number, arg1: Identifier, arg2: Item): void;
}