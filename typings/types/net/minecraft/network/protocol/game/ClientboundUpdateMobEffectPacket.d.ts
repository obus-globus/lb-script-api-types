import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class ClientboundUpdateMobEffectPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateMobEffectPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(entityId: number, effect: MobEffectInstance, blend: boolean)
    readonly effect: Holder<MobEffect>;
    readonly effectAmplifier: number;
    readonly effectDurationTicks: number;
    readonly entityId: number;
    // private flags: number;
    effectShowsIcon(): boolean;
    getEffect(): Holder<MobEffect>;
    getEffectAmplifier(): number;
    getEffectDurationTicks(): number;
    getEntityId(): number;
    handle(listener: ClientGamePacketListener): void;
    isEffectAmbient(): boolean;
    isEffectVisible(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    shouldBlend(): boolean;
    type(): PacketType<ClientboundUpdateMobEffectPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}