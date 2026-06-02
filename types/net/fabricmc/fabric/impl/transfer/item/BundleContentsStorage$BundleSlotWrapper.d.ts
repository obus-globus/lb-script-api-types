import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { StorageView } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class BundleContentsStorage$BundleSlotWrapper extends Object implements StorageView<ItemVariant> {
    private constructor(null_: BundleContentsStorage$BundleSlotWrapper, arg1: number)
    // private index: number;
    extract(arg0: ItemVariant, arg1: number, arg2: TransactionContext): number;
    getAmount(): number;
    getCapacity(): number;
    getResource(): ItemVariant;
    // private getStack(): ItemStack;
    getUnderlyingView(): StorageView<T>;
    isResourceBlank(): boolean;
}