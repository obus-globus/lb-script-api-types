import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BossBarProvider extends Object implements Provider {
    constructor()
    handleAdd(arg0: UserConnection, arg1: UUID): void;
    handleRemove(arg0: UserConnection, arg1: UUID): void;
}