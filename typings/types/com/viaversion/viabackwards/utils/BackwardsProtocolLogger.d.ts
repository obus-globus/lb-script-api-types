import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolLogger } from '../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
export class BackwardsProtocolLogger extends ProtocolLogger {
    constructor(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>)
}