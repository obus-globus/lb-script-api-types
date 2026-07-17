import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClockNetworkState } from '../../../../../net/minecraft/world/clock/ClockNetworkState.d.ts'
import type { WorldClock } from '../../../../../net/minecraft/world/clock/WorldClock.d.ts'
export class ClientboundSetTimePacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundSetTimePacket>;
    constructor(gameTime: number, clockUpdates: Map<Holder<WorldClock>, ClockNetworkState>)
    // private clockUpdates: Map<Holder<WorldClock>, ClockNetworkState>;
    // private gameTime: number;
    clockUpdates(): Map<Holder<WorldClock>, ClockNetworkState>;
    equals(o: Object | null): boolean;
    gameTime(): number;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ClientboundSetTimePacket>;
}