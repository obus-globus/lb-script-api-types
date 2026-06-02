import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClassicWorldHeightProvider } from '../../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/provider/ClassicWorldHeightProvider.d.ts'
export class ViaFabricPlusClassicWorldHeightProvider extends ClassicWorldHeightProvider {
    constructor()
    getMaxChunkSectionCount(arg0: UserConnection): number;
}