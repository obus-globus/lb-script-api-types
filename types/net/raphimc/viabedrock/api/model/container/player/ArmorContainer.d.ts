import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { InventorySubContainer } from '../../../../../../../net/raphimc/viabedrock/api/model/container/player/InventorySubContainer.d.ts'
export class ArmorContainer extends InventorySubContainer {
    constructor(arg0: UserConnection)
    javaSlot(arg0: number): number;
}