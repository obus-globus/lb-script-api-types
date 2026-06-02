import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SkinData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData.d.ts'
export class BedrockSkinUtilityInterface extends Object {
    static CHANNEL: string;
    static sendSkin(paramarg0: UserConnection, paramarg1: UUID, paramarg2: SkinData): void;
    constructor()
}