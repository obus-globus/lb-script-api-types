import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export abstract class ClientboundMoveEntityPacket extends Object implements Packet<ClientGamePacketListener> {
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(entityId: number, xa: number, ya: number, za: number, yRot: number, xRot: number, onGround: boolean, hasRot: boolean, hasPos: boolean)
    // private entityId: number;
    // private hasPos: boolean;
    // private hasRot: boolean;
    readonly onGround: boolean;
    // private xRot: number;
    readonly xa: number;
    // private yRot: number;
    readonly ya: number;
    readonly za: number;
    getEntity(level: Level): Entity;
    getXRot(): number;
    getXa(): number;
    getYRot(): number;
    getYa(): number;
    getZa(): number;
    handle(listener: ClientGamePacketListener): void;
    hasPosition(): boolean;
    hasRotation(): boolean;
    isOnGround(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ClientboundMoveEntityPacket>;
}