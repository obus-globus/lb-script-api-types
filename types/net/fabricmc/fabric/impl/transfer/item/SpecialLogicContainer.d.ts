import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface SpecialLogicContainer extends Object{
    fabric_onFinalCommit(arg0: number, arg1: ItemStack, arg2: ItemStack): void;
    fabric_onTransfer(arg0: number, arg1: TransactionContext): void;
    fabric_setSuppress(arg0: boolean): void;
}