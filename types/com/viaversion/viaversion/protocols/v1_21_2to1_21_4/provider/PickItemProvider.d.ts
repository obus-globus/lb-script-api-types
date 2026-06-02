import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PickItemProvider extends Object implements Provider {
    constructor()
    pickItemFromBlock(arg0: UserConnection, arg1: BlockPosition, arg2: boolean): void;
    pickItemFromEntity(arg0: UserConnection, arg1: number, arg2: boolean): void;
}