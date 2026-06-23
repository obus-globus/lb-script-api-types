import type { BackwardsMappingData } from '../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { AbstractProtocol } from '../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolLogger } from '../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
export abstract class BackwardsProtocol<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends AbstractProtocol<CU, CM, SM, SU> {
    constructor()
    constructor(arg0: Class<CU>, arg1: Class<CM>, arg2: Class<SM>, arg3: Class<SU>)
    applySharedRegistrations(): void;
    createLogger(): ProtocolLogger;
    dependsOn(): Class<Protocol<any, any, any, any>>;
    getMappingData(): BackwardsMappingData;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
}