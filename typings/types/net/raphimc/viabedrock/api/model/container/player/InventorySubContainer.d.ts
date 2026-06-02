import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { InventoryRedirectContainer } from '../../../../../../../net/raphimc/viabedrock/api/model/container/player/InventoryRedirectContainer.d.ts'
import type { ContainerType } from '../../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerType.d.ts'
import type { BedrockItem } from '../../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export abstract class InventorySubContainer extends InventoryRedirectContainer {
    constructor(arg0: UserConnection, arg1: number, arg2: ContainerType, arg3: number)
    setItems(arg0: BedrockItem[]): boolean;
}