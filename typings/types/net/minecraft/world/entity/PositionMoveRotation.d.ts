import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Relative } from '../../../../net/minecraft/world/entity/Relative.d.ts'
import type { TeleportTransition } from '../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PositionMoveRotation extends Record {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, PositionMoveRotation>;
    static calculateAbsolute(paramsource: PositionMoveRotation, paramchange: PositionMoveRotation, paramrelatives: Relative[]): PositionMoveRotation;
    static of(paramentity: Entity): PositionMoveRotation;
    static of(paramtransition: TeleportTransition): PositionMoveRotation;
    constructor(position: Vec3, deltaMovement: Vec3, yRot: number, xRot: number)
    // private deltaMovement: Vec3;
    // private position: Vec3;
    // private xRot: number;
    // private yRot: number;
    deltaMovement(): Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    position(): Vec3;
    toString(): string;
    withRotation(yRot: number, xRot: number): PositionMoveRotation;
    xRot(): number;
    yRot(): number;
}