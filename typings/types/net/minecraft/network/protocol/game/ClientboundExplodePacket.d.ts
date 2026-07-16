import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ExplosionParticleInfo } from '../../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { ParticleOptions } from '../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { WeightedList } from '../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientboundExplodePacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundExplodePacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(center: Vec3, radius: number, blockCount: number, playerKnockback: Optional<Vec3>, explosionParticle: ParticleOptions, explosionSound: Holder<SoundEvent>, blockParticles: WeightedList<ExplosionParticleInfo>)
    // private blockCount: number;
    // private blockParticles: WeightedList<ExplosionParticleInfo>;
    // private center: Vec3;
    // private explosionParticle: ParticleOptions;
    // private explosionSound: Holder<SoundEvent>;
    // private playerKnockback: Optional<Vec3>;
    // private radius: number;
    blockCount(): number;
    blockParticles(): WeightedList<ExplosionParticleInfo>;
    center(): Vec3;
    equals(o: Object | null): boolean;
    explosionParticle(): ParticleOptions;
    explosionSound(): Holder<SoundEvent>;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    playerKnockback(): Optional<Vec3>;
    radius(): number;
    toString(): string;
    type(): PacketType<ClientboundExplodePacket>;
}