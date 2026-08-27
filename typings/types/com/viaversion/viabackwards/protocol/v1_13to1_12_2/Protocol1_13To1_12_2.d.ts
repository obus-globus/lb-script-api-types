import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BackwardsMappingData1_13 } from '../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/data/BackwardsMappingData1_13.d.ts'
import type { BlockItemPacketRewriter1_13 } from '../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/rewriter/BlockItemPacketRewriter1_13.d.ts'
import type { EntityPacketRewriter1_13 } from '../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/rewriter/EntityPacketRewriter1_13.d.ts'
import type { ProtocolStorables1_13 } from '../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/storage/ProtocolStorables1_13.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { ClientboundPackets1_12_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ClientboundPackets1_12_1.d.ts'
import type { ServerboundPackets1_12_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ServerboundPackets1_12_1.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
export class Protocol1_13To1_12_2 extends BackwardsProtocol<ClientboundPackets1_13, ClientboundPackets1_12_1, ServerboundPackets1_13, ServerboundPackets1_12_1> {
    static LOGGER: ProtocolLogger;
    static MAPPINGS: BackwardsMappingData1_13;
    constructor()
    // private blockItemPackets: BlockItemPacketRewriter1_13;
    readonly entityRewriter: EntityPacketRewriter1_13;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_13>;
    // private translatableToLegacyRewriter: JsonNBTComponentRewriter<ClientboundPackets1_13>;
    createStorables(): ProtocolStorables1_13;
    getEntityRewriter(): EntityPacketRewriter1_13;
    getItemRewriter(): BlockItemPacketRewriter1_13;
    getLogger(): ProtocolLogger;
    getMappingData(): BackwardsMappingData1_13;
    init(arg0: UserConnection): void;
    jsonToLegacy(arg0: UserConnection, arg1: JsonElement): string;
    jsonToLegacy(arg0: UserConnection, arg1: string): string;
    registerPackets(): void;
    translatableRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_13>;
}