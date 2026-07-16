import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundLightUpdatePacketData } from '../../../../../net/minecraft/network/protocol/game/ClientboundLightUpdatePacketData.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export class ClientboundLightUpdatePacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundLightUpdatePacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(pos: ChunkPos, lightEngine: LevelLightEngine, skyChangedLightSectionFilter: BitSet, blockChangedLightSectionFilter: BitSet)
    readonly lightData: ClientboundLightUpdatePacketData;
    readonly x: number;
    readonly z: number;
    getLightData(): ClientboundLightUpdatePacketData;
    getX(): number;
    getZ(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundLightUpdatePacket>;
    // private write(output: FriendlyByteBuf): void;
}