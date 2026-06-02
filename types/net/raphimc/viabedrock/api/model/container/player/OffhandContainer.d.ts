import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { InventorySubContainer } from '../../../../../../../net/raphimc/viabedrock/api/model/container/player/InventorySubContainer.d.ts'
import type { BedrockItem } from '../../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class OffhandContainer extends InventorySubContainer {
    constructor(arg0: UserConnection)
    javaSlot(arg0: number): number;
    onSlotChanged(arg0: number, arg1: BedrockItem, arg2: BedrockItem): void;
}