import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { CompressionProvider } from '../../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/provider/CompressionProvider.d.ts'
export class ViaFabricPlusCompressionProvider extends CompressionProvider {
    constructor()
    handlePlayCompression(arg0: UserConnection, arg1: number): void;
}