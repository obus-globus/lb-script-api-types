import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundLevelParticlesPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundLevelParticlesPacket>;
    constructor(particle: ParticleOptions, overrideLimiter: boolean, alwaysShow: boolean, x: number, y: number, z: number, xDist: number, yDist: number, zDist: number, maxSpeed: number, count: number)
    // private alwaysShow: boolean;
    readonly count: number;
    readonly maxSpeed: number;
    readonly overrideLimiter: boolean;
    readonly particle: ParticleOptions;
    readonly x: number;
    // private xDist: number;
    readonly y: number;
    // private yDist: number;
    readonly z: number;
    // private zDist: number;
    alwaysShow(): boolean;
    getCount(): number;
    getMaxSpeed(): number;
    getParticle(): ParticleOptions;
    getX(): number;
    getXDist(): number;
    getY(): number;
    getYDist(): number;
    getZ(): number;
    getZDist(): number;
    handle(listener: ClientGamePacketListener): void;
    isOverrideLimiter(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundLevelParticlesPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}