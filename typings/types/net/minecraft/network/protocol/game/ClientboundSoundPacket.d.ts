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
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
export class ClientboundSoundPacket extends Object implements Packet<ClientGamePacketListener> {
    static LOCATION_ACCURACY: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundSoundPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(sound: Holder<SoundEvent>, source: SoundSource, x: number, y: number, z: number, volume: number, pitch: number, seed: number)
    private constructor(input: RegistryFriendlyByteBuf)
    readonly pitch: number;
    readonly seed: number;
    readonly sound: Holder<SoundEvent>;
    readonly source: SoundSource;
    readonly volume: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    getPitch(): number;
    getSeed(): number;
    getSound(): Holder<SoundEvent>;
    getSource(): SoundSource;
    getVolume(): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundSoundPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}