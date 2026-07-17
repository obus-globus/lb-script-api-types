import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { NewMinecartBehavior$MinecartStep } from '../../../../../net/minecraft/world/entity/vehicle/minecart/NewMinecartBehavior$MinecartStep.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class ClientboundMoveMinecartPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundMoveMinecartPacket>;
    constructor(entityId: number, lerpSteps: NewMinecartBehavior$MinecartStep[])
    // private entityId: number;
    // private lerpSteps: NewMinecartBehavior$MinecartStep[];
    entityId(): number;
    equals(o: Object | null): boolean;
    getEntity(level: Level): Entity;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    lerpSteps(): NewMinecartBehavior$MinecartStep[];
    toString(): string;
    type(): PacketType<ClientboundMoveMinecartPacket>;
}