import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HashedPatchMap$HashGenerator } from '../../../../net/minecraft/network/HashedPatchMap$HashGenerator.d.ts'
import type { HashedStack } from '../../../../net/minecraft/network/HashedStack.d.ts'
import type { RemoteSlot } from '../../../../net/minecraft/world/inventory/RemoteSlot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RemoteSlot$Synchronized extends Object implements RemoteSlot {
    static PLACEHOLDER: RemoteSlot;
    constructor(hasher: (param0: Object | null) => unknown)
    // private hasher: (param0: Object | null) => unknown;
    // private remoteHash: HashedStack;
    // private remoteStack: ItemStack;
    copyFrom(other: RemoteSlot$Synchronized): void;
    force(outgoing: ItemStack): void;
    matches(local: ItemStack): boolean;
    receive(incoming: HashedStack): void;
}