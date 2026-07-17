import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export class ClientboundInitializeBorderPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundInitializeBorderPacket>;
    constructor(border: WorldBorder)
    readonly lerpTime: number;
    readonly newAbsoluteMaxSize: number;
    readonly newCenterX: number;
    readonly newCenterZ: number;
    readonly newSize: number;
    readonly oldSize: number;
    readonly warningBlocks: number;
    readonly warningTime: number;
    getLerpTime(): number;
    getNewAbsoluteMaxSize(): number;
    getNewCenterX(): number;
    getNewCenterZ(): number;
    getNewSize(): number;
    getOldSize(): number;
    getWarningBlocks(): number;
    getWarningTime(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundInitializeBorderPacket>;
    // private write(output: FriendlyByteBuf): void;
}