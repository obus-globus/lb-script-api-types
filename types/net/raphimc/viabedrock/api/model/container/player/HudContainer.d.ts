import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { InventoryRedirectContainer } from '../../../../../../../net/raphimc/viabedrock/api/model/container/player/InventoryRedirectContainer.d.ts'
import type { BedrockItem } from '../../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class HudContainer extends InventoryRedirectContainer {
    constructor(arg0: UserConnection)
    javaSlot(arg0: number): number;
    setItem(arg0: number, arg1: BedrockItem): boolean;
}