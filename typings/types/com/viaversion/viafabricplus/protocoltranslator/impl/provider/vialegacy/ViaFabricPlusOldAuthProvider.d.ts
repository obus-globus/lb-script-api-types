import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { OldAuthProvider } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/provider/OldAuthProvider.d.ts'
export class ViaFabricPlusOldAuthProvider extends OldAuthProvider {
    constructor()
    sendAuthRequest(arg0: UserConnection, arg1: string): void;
}