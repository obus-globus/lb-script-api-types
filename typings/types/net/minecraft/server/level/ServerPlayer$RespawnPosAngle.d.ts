import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerPlayer$RespawnPosAngle extends Record {
    static of(paramposition: Vec3, paramlookAtBlockPos: BlockPos, parampitch: number): ServerPlayer$RespawnPosAngle;
    private constructor(position: Vec3, yaw: number, pitch: number)
    // private pitch: number;
    // private position: Vec3;
    // private yaw: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pitch(): number;
    position(): Vec3;
    toString(): string;
    yaw(): number;
}