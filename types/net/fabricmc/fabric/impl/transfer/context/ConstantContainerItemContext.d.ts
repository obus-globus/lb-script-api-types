import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemApiLookup } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/item/ItemApiLookup.d.ts'
import type { ContainerItemContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/context/ContainerItemContext.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ConstantContainerItemContext extends Object implements ContainerItemContext {
    static forCreativeInteraction(paramarg0: Player, paramarg1: ItemStack): ContainerItemContext;
    static forPlayerInteraction(paramarg0: Player, paramarg1: InteractionHand): ContainerItemContext;
    static ofPlayerCursor(paramarg0: Player, paramarg1: AbstractContainerMenu): ContainerItemContext;
    static ofPlayerHand(paramarg0: Player, paramarg1: InteractionHand): ContainerItemContext;
    static ofPlayerSlot(paramarg0: Player, paramarg1: ItemVariant[]): ContainerItemContext;
    static ofSingleSlot(paramarg0: ItemVariant[]): ContainerItemContext;
    static withConstant(paramarg0: ItemVariant, paramarg1: number): ContainerItemContext;
    static withConstant(paramarg0: ItemStack): ContainerItemContext;
    constructor(arg0: ItemVariant, arg1: number)
    // private backingSlot: ItemVariant[];
    exchange(arg0: ItemVariant, arg1: number, arg2: TransactionContext): number;
    extract(arg0: ItemVariant, arg1: number, arg2: TransactionContext): number;
    find<A extends Object | number | string | boolean>(arg0: ItemApiLookup<A, ContainerItemContext>): A;
    getAdditionalSlots(): ItemVariant[][];
    getAmount(): number;
    getItemVariant(): ItemVariant;
    getMainSlot(): ItemVariant[];
    insert(arg0: ItemVariant, arg1: number, arg2: TransactionContext): number;
    insertOverflow(arg0: ItemVariant, arg1: number, arg2: TransactionContext): number;
    toString(): string;
}