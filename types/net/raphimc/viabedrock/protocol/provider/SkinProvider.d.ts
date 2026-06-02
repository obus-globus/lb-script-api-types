import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SkinData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData.d.ts'
export class SkinProvider extends Object implements Provider {
    constructor()
    getClientPlayerSkin(arg0: UserConnection): { [key: string]: Object };
    setSkin(arg0: UserConnection, arg1: UUID, arg2: SkinData): void;
}