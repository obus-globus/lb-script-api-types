import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ClassicProtocolExtension } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_30cpetoc0_28_30/data/ClassicProtocolExtension.d.ts'
import type { ClientboundPacketsc0_30cpe } from '../../../../../../net/raphimc/vialegacy/protocol/classic/c0_30cpetoc0_28_30/packet/ClientboundPacketsc0_30cpe.d.ts'
export class CPEAdditions extends Object {
    static ALLOWED_EXTENSIONS: ClassicProtocolExtension[];
    static CUSTOM_PACKETS: { [key: number]: ClientboundPacketsc0_30cpe };
    static EXTENDED_CLASSIC_ITEMS: Item[];
    static EXT_WEATHER_TYPE: ClientboundPacketsc0_30cpe;
    static allowExtension(paramarg0: ClassicProtocolExtension): void;
    static createNewPacket(paramarg0: ClassicProtocolExtension, paramarg1: number, paramarg2: (param0: UserConnection, param1: ByteBuf) => void): ClientboundPacketsc0_30cpe;
    static init(): void;
    static isSnowing(): boolean;
    static setSnowing(paramarg0: boolean): void;
    constructor()
}