import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
export abstract class ServerboundMovePlayerPacket extends Object implements Packet<ServerGamePacketListener> {
    constructor(x: number, y: number, z: number, yRot: number, xRot: number, onGround: boolean, horizontalCollision: boolean, hasPos: boolean, hasRot: boolean)
    hasPos: boolean;
    hasRot: boolean;
    // private horizontalCollision: boolean;
    onGround: boolean;
    x: number;
    xRot: number;
    y: number;
    yRot: number;
    z: number;
    getX(fallback: number): number;
    getXRot(fallback: number): number;
    getY(fallback: number): number;
    getYRot(fallback: number): number;
    getZ(fallback: number): number;
    handle(listener: ServerGamePacketListener): void;
    hasPosition(): boolean;
    hasRotation(): boolean;
    horizontalCollision(): boolean;
    isOnGround(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundMovePlayerPacket>;
}