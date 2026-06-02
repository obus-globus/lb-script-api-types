import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InventoryQuickMoveProvider extends Object implements Provider {
    constructor()
    registerQuickMoveAction(arg0: number, arg1: number, arg2: number, arg3: UserConnection): boolean;
}