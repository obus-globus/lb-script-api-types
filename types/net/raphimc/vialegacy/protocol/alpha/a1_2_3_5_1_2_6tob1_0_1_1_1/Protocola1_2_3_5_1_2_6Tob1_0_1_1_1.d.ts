import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ViaProviders } from '../../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { StatelessProtocol } from '../../../../../../net/raphimc/vialegacy/api/protocol/StatelessProtocol.d.ts'
import type { ClientboundPacketsa1_2_6 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_3_5_1_2_6tob1_0_1_1_1/packet/ClientboundPacketsa1_2_6.d.ts'
import type { ServerboundPacketsa1_2_6 } from '../../../../../../net/raphimc/vialegacy/protocol/alpha/a1_2_3_5_1_2_6tob1_0_1_1_1/packet/ServerboundPacketsa1_2_6.d.ts'
import type { ClientboundPacketsb1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_1_2tob1_2_0_2/packet/ClientboundPacketsb1_1.d.ts'
import type { ServerboundPacketsb1_1 } from '../../../../../../net/raphimc/vialegacy/protocol/beta/b1_1_2tob1_2_0_2/packet/ServerboundPacketsb1_1.d.ts'
export class Protocola1_2_3_5_1_2_6Tob1_0_1_1_1 extends StatelessProtocol<ClientboundPacketsa1_2_6, ClientboundPacketsb1_1, ServerboundPacketsa1_2_6, ServerboundPacketsb1_1> {
    static copyItem(paramarg0: Item): Item;
    static copyItems(paramarg0: (Object | null)[]): (Object | null)[];
    static dropItem(paramarg0: UserConnection, paramarg1: Item, paramarg2: boolean): void;
    static fixItem(paramarg0: Item): Item;
    static fixItems(paramarg0: (Object | null)[]): (Object | null)[];
    static reverseArray(paramarg0: (Object | null)[]): (Object | null)[];
    constructor()
    // private getBurningTime(arg0: Item): number;
    init(arg0: UserConnection): void;
    // private readItemsFromTag(arg0: Map$Entry<string, Tag>[], arg1: Item[]): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private sendProgressUpdate(arg0: UserConnection, arg1: number, arg2: number, arg3: number): void;
    // private sendWindowItems(arg0: UserConnection, arg1: number, arg2: Item[]): void;
    // private writeItemsToTag(arg0: Map$Entry<string, Tag>[], arg1: Item[]): void;
}