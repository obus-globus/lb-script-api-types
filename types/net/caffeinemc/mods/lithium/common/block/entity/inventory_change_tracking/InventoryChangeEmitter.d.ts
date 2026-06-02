import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InventoryChangeListener } from '../../../../../../../../net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking/InventoryChangeListener.d.ts'
export interface InventoryChangeEmitter extends Object{
    emitCallbackReplaced(): void;
    lithium$emitContentModified(): void;
    lithium$emitFirstComparatorAdded(): void;
    lithium$emitRemoved(): void;
    lithium$emitStackListReplaced(): void;
    lithium$forwardContentChangeOnce(arg0: InventoryChangeListener, arg1: (Object | null)[]): void;
    lithium$forwardMajorInventoryChanges(arg0: InventoryChangeListener): void;
    lithium$stopForwardingMajorInventoryChanges(arg0: InventoryChangeListener): void;
}