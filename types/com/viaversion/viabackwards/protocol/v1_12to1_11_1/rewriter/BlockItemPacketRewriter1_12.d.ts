import type { IntArrayTag } from '../../../../../../com/viaversion/nbt/tag/IntArrayTag.d.ts'
import type { LongArrayTag } from '../../../../../../com/viaversion/nbt/tag/LongArrayTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { LegacyBlockItemRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/LegacyBlockItemRewriter.d.ts'
import type { Protocol1_12To1_11_1 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/Protocol1_12To1_11_1.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ClientboundPackets1_12 } from '../../../../../../com/viaversion/viaversion/protocols/v1_11_1to1_12/packet/ClientboundPackets1_12.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockItemPacketRewriter1_12 extends LegacyBlockItemRewriter<ClientboundPackets1_12, ServerboundPackets1_9_3, Protocol1_12To1_11_1> {
    constructor(arg0: Protocol1_12To1_11_1)
    // private fromIntArrayTag(arg0: IntArrayTag): LongArrayTag;
    // private fromLongArrayTag(arg0: LongArrayTag): IntArrayTag;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    // private handleNbtToClient(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[]): boolean;
    // private handleNbtToServer(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[]): void;
    // private handleSignText(arg0: Map$Entry<string, Tag>[]): void;
    registerPackets(): void;
}