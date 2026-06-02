import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Container } from '../../../../../../../net/raphimc/viabedrock/api/model/container/Container.d.ts'
import type { BedrockItem } from '../../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class InventoryContainer extends Container {
    constructor(arg0: UserConnection)
    constructor(arg0: UserConnection, arg1: number, arg2: BlockPosition, arg3: InventoryContainer)
    readonly selectedHotbarSlot: number;
    getJavaItems(): Item[];
    getSelectedHotbarItem(): BedrockItem;
    getSelectedHotbarSlot(): number;
    javaContainerId(): number;
    javaSlot(arg0: number): number;
    // private onSelectedHotbarSlotChanged(arg0: BedrockItem, arg1: BedrockItem, arg2: PacketWrapper): void;
    onSlotChanged(arg0: number, arg1: BedrockItem, arg2: BedrockItem): void;
    sendSelectedHotbarSlotToClient(): void;
    setItems(arg0: BedrockItem[]): boolean;
    setSelectedHotbarSlot(arg0: number, arg1: PacketWrapper): void;
}