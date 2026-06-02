import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundMerchantOffersPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundMerchantOffersPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(containerId: number, offers: (Object | null)[], merchantLevel: number, merchantXp: number, showProgress: boolean, canRestock: boolean)
    private constructor(input: RegistryFriendlyByteBuf)
    // private canRestock: boolean;
    readonly containerId: number;
    readonly offers: (Object | null)[];
    // private showProgress: boolean;
    readonly villagerLevel: number;
    readonly villagerXp: number;
    canRestock(): boolean;
    getContainerId(): number;
    getOffers(): (Object | null)[];
    getVillagerLevel(): number;
    getVillagerXp(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    showProgress(): boolean;
    type(): PacketType<ClientboundMerchantOffersPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}