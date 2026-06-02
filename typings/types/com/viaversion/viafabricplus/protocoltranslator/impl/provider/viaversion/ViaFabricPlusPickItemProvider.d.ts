import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { PickItemProvider } from '../../../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/provider/PickItemProvider.d.ts'
export class ViaFabricPlusPickItemProvider extends PickItemProvider {
    constructor()
    pickItemFromBlock(arg0: UserConnection, arg1: BlockPosition, arg2: boolean): void;
    pickItemFromEntity(arg0: UserConnection, arg1: number, arg2: boolean): void;
}