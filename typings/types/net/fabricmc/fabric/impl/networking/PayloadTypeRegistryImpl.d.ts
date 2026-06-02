import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PayloadTypeRegistry } from '../../../../../net/fabricmc/fabric/api/networking/v1/PayloadTypeRegistry.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ProtocolInfo } from '../../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { CustomPacketPayload$TypeAndCodec } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$TypeAndCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class PayloadTypeRegistryImpl<B extends FriendlyByteBuf> extends Object implements PayloadTypeRegistry<B> {
    static CLIENTBOUND_CONFIGURATION: PayloadTypeRegistryImpl<FriendlyByteBuf>;
    static CLIENTBOUND_PLAY: PayloadTypeRegistryImpl<RegistryFriendlyByteBuf>;
    static SERVERBOUND_CONFIGURATION: PayloadTypeRegistryImpl<FriendlyByteBuf>;
    static SERVERBOUND_PLAY: PayloadTypeRegistryImpl<RegistryFriendlyByteBuf>;
    static clientboundConfiguration(): PayloadTypeRegistry<FriendlyByteBuf>;
    static clientboundPlay(): PayloadTypeRegistry<RegistryFriendlyByteBuf>;
    static get(paramarg0: ProtocolInfo<Object>): PayloadTypeRegistryImpl<Object>;
    static serverboundConfiguration(): PayloadTypeRegistry<FriendlyByteBuf>;
    static serverboundPlay(): PayloadTypeRegistry<RegistryFriendlyByteBuf>;
    private constructor(arg0: ConnectionProtocol, arg1: PacketFlow)
    readonly flow: PacketFlow;
    // private maxPacketSizes: Object2IntMap<Identifier>;
    // private minimalSplittableSize: number;
    // private packetTypes: Map<Identifier, CustomPacketPayload$TypeAndCodec<B, CustomPacketPayload>>;
    // private pendingMaxPacketSizes: Map<Identifier, () => kotlin.Int>;
    readonly protocol: ConnectionProtocol;
    get(arg0: CustomPacketPayload$Type<T>): CustomPacketPayload$TypeAndCodec<B, T>;
    get(arg0: Identifier): CustomPacketPayload$TypeAndCodec<B, CustomPacketPayload>;
    getFlow(): PacketFlow;
    getMaxPacketSizeForSplitting(arg0: Identifier): number;
    getProtocol(): ConnectionProtocol;
    // private padAndSetMaxPacketSize(arg0: Identifier, arg1: number): void;
    register(arg0: CustomPacketPayload$Type<T>, arg1: StreamCodec<B, T>): CustomPacketPayload$TypeAndCodec<B, T>;
    registerLarge(arg0: CustomPacketPayload$Type<T>, arg1: StreamCodec<B, T>, arg2: () => kotlin.Int): CustomPacketPayload$TypeAndCodec<B, T>;
    registerLarge(arg0: CustomPacketPayload$Type<T>, arg1: StreamCodec<B, T>, arg2: number): CustomPacketPayload$TypeAndCodec<B, T>;
}