import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { SecretKey } from '../../../../../../../javax/crypto/SecretKey.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
import type { NettyPipelineProvider } from '../../../../../../../net/raphimc/viabedrock/protocol/provider/NettyPipelineProvider.d.ts'
export class ViaFabricPlusNettyPipelineProvider extends NettyPipelineProvider {
    constructor()
    enableCompression(arg0: UserConnection, arg1: PacketCompressionAlgorithm, arg2: number): void;
    enableEncryption(arg0: UserConnection, arg1: SecretKey): void;
}