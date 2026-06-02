import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Container } from '../../../../../../../net/raphimc/viabedrock/api/model/container/Container.d.ts'
import type { ContainerType } from '../../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerType.d.ts'
export abstract class InventoryRedirectContainer extends Container {
    constructor(arg0: UserConnection, arg1: number, arg2: ContainerType, arg3: number)
    getActualJavaItems(): Item[];
    getJavaItems(): Item[];
    javaContainerId(): number;
}