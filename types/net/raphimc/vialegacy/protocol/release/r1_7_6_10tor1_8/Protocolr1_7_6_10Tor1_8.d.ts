import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes1_8$EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ValueTransformer } from '../../../../../../com/viaversion/viaversion/api/protocol/remapper/ValueTransformer.d.ts'
import type { ClientboundPackets1_8 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ClientboundPackets1_8.d.ts'
import type { ServerboundPackets1_8 } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/packet/ServerboundPackets1_8.d.ts'
import type { Random } from '../../../../../../java/util/Random.d.ts'
import type { ClientboundPackets1_7_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ClientboundPackets1_7_2.d.ts'
import type { ServerboundPackets1_7_2 } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_2_5tor1_7_6_10/packet/ServerboundPackets1_7_2.d.ts'
import type { EntityDataRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/rewriter/EntityDataRewriter.d.ts'
import type { ItemRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/rewriter/ItemRewriter.d.ts'
import type { TextRewriter } from '../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/rewriter/TextRewriter.d.ts'
export class Protocolr1_7_6_10Tor1_8 extends AbstractProtocol<ClientboundPackets1_7_2, ClientboundPackets1_8, ServerboundPackets1_7_2, ServerboundPackets1_8> {
    static LEGACY_TO_JSON: ValueTransformer<string, string>;
    static LEGACY_TO_JSON_TRANSLATE: ValueTransformer<string, string>;
    constructor()
    // private chatComponentRewriter: TextRewriter;
    readonly entityDataRewriter: EntityDataRewriter;
    readonly itemRewriter: ItemRewriter;
    getEntityDataRewriter(): EntityDataRewriter;
    getItemRewriter(): ItemRewriter;
    init(arg0: UserConnection): void;
    // private randomFloatClamp(arg0: Random, arg1: number, arg2: number): number;
    // private realignEntityY(arg0: EntityTypes1_8$EntityType, arg1: number): number;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
}