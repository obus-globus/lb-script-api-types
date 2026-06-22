import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InventoryChangeEmitter } from '../../../../../../../../net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking/InventoryChangeEmitter.d.ts'
import type { InventoryChangeListener } from '../../../../../../../../net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking/InventoryChangeListener.d.ts'
export interface InventoryChangeTracker extends Object, InventoryChangeEmitter{
    emitCallbackReplaced(): void;
    listenForContentChangesOnce(arg0: (Object | null)[], arg1: InventoryChangeListener): void;
    listenForMajorInventoryChanges(arg0: InventoryChangeListener): void;
    lithium$emitContentModified(): void;
    lithium$emitFirstComparatorAdded(): void;
    lithium$emitRemoved(): void;
    lithium$emitStackListReplaced(): void;
    lithium$forwardMajorInventoryChanges(arg0: InventoryChangeListener): void;
    lithium$stopForwardingMajorInventoryChanges(arg0: InventoryChangeListener): void;
    stopListenForMajorInventoryChanges(arg0: InventoryChangeListener): void;
}