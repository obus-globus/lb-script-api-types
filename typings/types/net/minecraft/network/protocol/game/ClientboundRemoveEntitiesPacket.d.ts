import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientboundRemoveEntitiesPacketAddition } from '../../../../../net/ccbluex/liquidbounce/interfaces/ClientboundRemoveEntitiesPacketAddition.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundRemoveEntitiesPacket extends Object implements ClientboundRemoveEntitiesPacketAddition, Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundRemoveEntitiesPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(ids: (Object | null)[])
    constructor(ids: number[])
    private constructor(input: FriendlyByteBuf)
    readonly entityIds: (Object | null)[];
    // private liquid_bounce$containsCrystal: boolean;
    getEntityIds(): (Object | null)[];
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    liquid_bounce$containsCrystal(): boolean;
    liquid_bounce$setContainsCrystal(): void;
    type(): PacketType<ClientboundRemoveEntitiesPacket>;
    // private write(output: FriendlyByteBuf): void;
}