import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { ConstantContainerItemContext } from '../../../../../../net/fabricmc/fabric/impl/transfer/context/ConstantContainerItemContext.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class CreativeInteractionContainerItemContext extends ConstantContainerItemContext {
    constructor(arg0: ItemVariant, arg1: number, arg2: Player)
    // private playerInventory: (Object | null)[];
    insertOverflow(arg0: ItemVariant, arg1: number, arg2: TransactionContext): number;
    toString(): string;
}