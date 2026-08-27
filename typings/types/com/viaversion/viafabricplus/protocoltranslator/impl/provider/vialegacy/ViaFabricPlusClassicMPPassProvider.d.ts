import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClassicMpPassProvider } from '../../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/provider/ClassicMpPassProvider.d.ts'
export class ViaFabricPlusClassicMPPassProvider extends ClassicMpPassProvider {
    static classicubeMPPass: string;
    constructor()
    getMpPass(arg0: UserConnection): string;
}