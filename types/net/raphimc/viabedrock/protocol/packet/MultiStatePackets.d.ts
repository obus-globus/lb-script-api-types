import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockProtocol } from '../../../../../net/raphimc/viabedrock/protocol/BedrockProtocol.d.ts'
export class MultiStatePackets extends Object {
    static CLIENT_SETTINGS_HANDLER: (param0: PacketWrapper) => void;
    static CUSTOM_PAYLOAD_HANDLER: (param0: PacketWrapper) => void;
    static register(paramarg0: BedrockProtocol): void;
    constructor()
}