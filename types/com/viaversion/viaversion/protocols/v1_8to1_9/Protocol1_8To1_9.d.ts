import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ValueTransformer } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { ClientboundPackets1_8 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_8.d.ts'
import type { ClientboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_9.d.ts'
import type { ServerboundPackets1_8 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_8.d.ts'
import type { ServerboundPackets1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_9.d.ts'
import type { EntityPacketRewriter1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/rewriter/EntityPacketRewriter1_9.d.ts'
import type { ItemPacketRewriter1_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/rewriter/ItemPacketRewriter1_9.d.ts'
export class Protocol1_8To1_9 extends AbstractProtocol<ClientboundPackets1_8, ClientboundPackets1_9, ServerboundPackets1_8, ServerboundPackets1_9> {
    static STRING_TO_JSON: ValueTransformer<string, JsonElement>;
    static isSword(paramarg0: number): boolean;
    constructor()
    readonly entityRewriter: EntityPacketRewriter1_9;
    readonly itemRewriter: ItemPacketRewriter1_9;
    getEntityRewriter(): EntityPacketRewriter1_9;
    getItemRewriter(): ItemPacketRewriter1_9;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}