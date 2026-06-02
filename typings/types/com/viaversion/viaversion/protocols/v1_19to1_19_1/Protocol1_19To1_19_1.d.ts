import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ClientboundPackets1_19.d.ts'
import type { ServerboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ServerboundPackets1_19.d.ts'
import type { ChatDecorationResult } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/data/ChatDecorationResult.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { ServerboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ServerboundPackets1_19_1.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Protocol1_19To1_19_1 extends AbstractProtocol<ClientboundPackets1_19, ClientboundPackets1_19_1, ServerboundPackets1_19, ServerboundPackets1_19_1> {
    static LOGGER: ProtocolLogger;
    static decorateChatMessage(paramarg0: Map$Entry<string, Tag>[], paramarg1: number, paramarg2: JsonElement, paramarg3: JsonElement, paramarg4: JsonElement): ChatDecorationResult;
    static translatabaleComponentFromTag(paramarg0: Map$Entry<string, Tag>[], paramarg1: JsonElement, paramarg2: JsonElement, paramarg3: JsonElement): JsonElement;
    constructor()
    getLogger(): ProtocolLogger;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}