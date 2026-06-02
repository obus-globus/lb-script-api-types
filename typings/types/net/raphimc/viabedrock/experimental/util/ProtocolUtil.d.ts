import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ServerboundPackets26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPackets26_1.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockProtocol } from '../../../../../net/raphimc/viabedrock/protocol/BedrockProtocol.d.ts'
import type { ClientboundBedrockPackets } from '../../../../../net/raphimc/viabedrock/protocol/ClientboundBedrockPackets.d.ts'
export class ProtocolUtil extends Object {
    static appendClientbound(paramarg0: BedrockProtocol, paramarg1: ClientboundBedrockPackets, paramarg2: (param0: PacketWrapper) => void): void;
    static appendServerbound(paramarg0: BedrockProtocol, paramarg1: ServerboundPackets26_1, paramarg2: (param0: PacketWrapper) => void): void;
    static prependClientbound(paramarg0: BedrockProtocol, paramarg1: ClientboundBedrockPackets, paramarg2: (param0: PacketWrapper) => void): void;
    static prependServerbound(paramarg0: BedrockProtocol, paramarg1: ServerboundPackets26_1, paramarg2: (param0: PacketWrapper) => void): void;
    constructor()
}