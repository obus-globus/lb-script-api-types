import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Hotbar extends Object {
    static CODEC: Codec<Hotbar>;
    constructor()
    private constructor(items: Dynamic<Object>[])
    // private items: Dynamic<Object>[];
    isEmpty(): boolean;
    load(registries: HolderLookup$Provider): ItemStack[];
    storeFrom(inventory: (Object | null)[], lookupProvider: RegistryAccess): void;
}