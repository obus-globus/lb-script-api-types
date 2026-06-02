import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { EntityPacketRewriter1_19_1 } from '../../../../../com/viaversion/viabackwards/protocol/v1_19_1to1_19/rewriter/EntityPacketRewriter1_19_1.d.ts'
import type { ChatRegistryStorage } from '../../../../../com/viaversion/viabackwards/protocol/v1_19_1to1_19/storage/ChatRegistryStorage.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ClientboundPackets1_19.d.ts'
import type { ServerboundPackets1_19 } from '../../../../../com/viaversion/viaversion/protocols/v1_18_2to1_19/packet/ServerboundPackets1_19.d.ts'
import type { ClientboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ClientboundPackets1_19_1.d.ts'
import type { ServerboundPackets1_19_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_19to1_19_1/packet/ServerboundPackets1_19_1.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Protocol1_19_1To1_19 extends BackwardsProtocol<ClientboundPackets1_19_1, ClientboundPackets1_19, ServerboundPackets1_19_1, ServerboundPackets1_19> {
    static GAME_INFO_ID: number;
    static SYSTEM_CHAT_ID: number;
    static decorateChatMessage(paramarg0: Protocol<Object, Object, Object, Object>, paramarg1: ChatRegistryStorage, paramarg2: number, paramarg3: JsonElement, paramarg4: JsonElement, paramarg5: JsonElement): JsonElement;
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_19_1;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPackets1_19_1>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPackets1_19_1>;
    getEntityRewriter(): EntityPacketRewriter1_19_1;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}