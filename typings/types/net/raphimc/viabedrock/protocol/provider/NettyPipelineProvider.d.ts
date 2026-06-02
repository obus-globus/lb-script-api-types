import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { SecretKey } from '../../../../../javax/crypto/SecretKey.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketCompressionAlgorithm } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PacketCompressionAlgorithm.d.ts'
export abstract class NettyPipelineProvider extends Object implements Provider {
    constructor()
    enableCompression(arg0: UserConnection, arg1: PacketCompressionAlgorithm, arg2: number): void;
    enableEncryption(arg0: UserConnection, arg1: SecretKey): void;
}